import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";

import Deposit from "../../assets/Deposit.png";
import Withdraw from "../../assets/Withdraw.png";
import Wallet from "../../assets/Wallet.png";
import Event from "../../assets/Event.png";
import About from "../../assets/About.png";
import Rules from "../../assets/Rules.png";
import Description from "../../assets/Description.png";
import News from "../../assets/News.png";

import { Card, Grid, Text, Link, Avatar, Image, User } from "@geist-ui/core";

interface INpc {
  username: string;
  profit: number;
}

const Dashboard: React.FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const [profitData, setProfitData] = React.useState<INpc[]>([]);

  React.useEffect(() => {
    document.title = "Dashboard";
  }, []);

  React.useEffect(() => {
    const generateRandomUsername = () => {
      const prefix = Math.random().toString(36).substring(2, 4);
      const suffix = Math.random().toString(36).substring(2, 4);
      return `${prefix}*****${suffix}`;
    };

    const generateRandomUserData = () => {
      return {
        username: generateRandomUsername(),
        profit: Math.floor(Math.random() * (5000 - 1200 + 1) + 1200),
      };
    };

    const updateData = () => {
      setProfitData((prevData) => {
        const newData = [generateRandomUserData(), ...prevData.slice(0, 4)];
        return newData;
      });
    };

    const generatedData = Array.from({ length: 5 }, generateRandomUserData);
    setProfitData(generatedData);

    const interval = setInterval(updateData, 1500);

    return () => clearInterval(interval);
  }, [setProfitData]);

  return (
    <Grid.Container
      gap={3}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid xs={12}>
        <Card width="100%">
          <Text
            h6
            my={0}
            style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
          >
            <Avatar text="W" /> {user?.user?.username ?? ""}
          </Text>
          {/* <User src={Deposit} name={user?.user?.balance ?? ""} /> */}
          <Card.Footer
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Text p>Мои общие активы: {user?.user?.balance ?? ""}</Text>

            <Grid.Container gap={2}>
              <Grid xs={6}>
                <Text p>Сегодняшняя прибыль: {user?.user?.balance ?? ""}</Text>
              </Grid>
              <Grid xs={6}>
                <Text p>Рекламный бонус: {user?.user?.balance ?? ""}</Text>
              </Grid>
              <Grid xs={6}>
                <Text p>Накопленная прибыль: {user?.user?.balance ?? ""}</Text>
              </Grid>
            </Grid.Container>
          </Card.Footer>
        </Card>
      </Grid>

      <Grid xs={12}>
        <Grid.Container gap={4} justify="center">
          <Grid xs={3.2}>
            <Link href="/deposit">
              <Image width="100%" height="auto" src={Deposit} alt="Deposit" />
            </Link>
          </Grid>
          <Grid xs={3.2}>
            <Link href="/withdraw">
              <Image width="100%" height="auto" src={Withdraw} alt="Withdraw" />
            </Link>
          </Grid>
          <Grid xs={3.2}>
            <Link href="/wallet">
              <Image width="100%" height="auto" src={Wallet} alt="Wallet" />
            </Link>
          </Grid>
          <Grid xs={3.2}>
            <Link href="/event">
              <Image width="100%" height="auto" src={Event} alt="Event" />
            </Link>
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={12}>
        <Grid.Container gap={4} justify="center">
          <Grid xs={3.2}>
            <Link href="/about">
              <Image width="100%" height="auto" src={About} alt="About" />
            </Link>
          </Grid>
          <Grid xs={3.2}>
            <Link href="/rules">
              <Image width="100%" height="auto" src={Rules} alt="Rules" />
            </Link>
          </Grid>
          <Grid xs={3.2}>
            <Link href="/description">
              <Image
                width="100%"
                height="auto"
                src={Description}
                alt="Description"
              />
            </Link>
          </Grid>
          <Grid xs={3.2}>
            <Link href="/news">
              <Image width="100%" height="auto" src={News} alt="News" />
            </Link>
          </Grid>
        </Grid.Container>
      </Grid>

      {/* <Grid xs={12}>
        <ul className="list-none">
          {profitData.map((user, index) => (
            <li
              key={index}
              className="list-item"
              style={{
                transform: `translateY(${
                  (index - profitData.length + 1) * 2
                }rem)`,
              }}
            >
              <span className="font-semibold">{user.username}</span> заработал{" "}
              {user.profit}!
            </li>
          ))}
        </ul>
      </Grid> */}
    </Grid.Container>
  );
};

export default Dashboard;
