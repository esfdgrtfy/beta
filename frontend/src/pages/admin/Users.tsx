import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Table } from "@geist-ui/core";
import { IUser } from "redux/types/user";
import { IAdmin } from "redux/types/admin";
import { RootState } from "redux/reducers";
import { getUsers, deleteUser } from "redux/actions/admin";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    margin: "auto",
  },
}));

const Users: React.FC = (): JSX.Element => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [users, setUsers] = React.useState<IUser[]>([]);
  const [admins, setAdmins] = React.useState<IAdmin[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<IUser | null>(null);
  const admin = useSelector((state: RootState) => state.admin);
  const [modalVisible, setModalVisible] = React.useState(false);

  console.log(users);

  const openModal = (user: IUser) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDeleteUser = (user: IUser) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // Assuming user.id is the ID of the user and it's a number
      dispatch(deleteUser(Number(user.id))); // Convert user.id to a number
    }
  };

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  React.useEffect(() => {
    setUsers(() => admin?.users?.filter((user: any) => user.role === "user"));
    setAdmins(() => admin?.users?.filter((user: any) => user.role === "admin"));
  }, [admin]);

  React.useEffect(() => {
    document.title = "Admin Panel";
  }, []);

  return (
    <div className={styles.root}>
      <Table data={users}>
        <Table.Column prop="username" label="Username" />
        <Table.Column prop="email" label="Email" />
        <Table.Column
          prop="operation"
          label="Operation"
          width={150}
          render={(value, rowData) => (
            <Button
              type="secondary"
              auto
              scale={1 / 3}
              font="12px"
              onClick={() => openModal(rowData as unknown as IUser)}
            >
              Update
            </Button>
          )}
        />
        <Table.Column
          prop="delete"
          label="Delete"
          width={150}
          render={(value, rowData) => (
            <Button
              type="error"
              auto
              scale={1 / 3}
              font="12px"
              onClick={() => handleDeleteUser(rowData as unknown as IUser)}
            >
              Delete
            </Button>
          )}
        />
      </Table>
      <Modal visible={modalVisible} onClose={closeModal}>
        <Modal.Title>User: {selectedUser?.username}</Modal.Title>
        <Modal.Content>
          <p>Email: {selectedUser?.email}</p>
          <p>Balance: {selectedUser?.balance}</p>
          <p>Wallet Address: {selectedUser?.walletAddress}</p>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Users;
