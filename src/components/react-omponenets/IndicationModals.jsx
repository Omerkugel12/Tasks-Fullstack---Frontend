import React from "react";
import Modal from "../ui/Modal";
import { useModalContext } from "@/contexts/ModalContext";
import { useAuth } from "@/contexts/AuthContext";

function IndicationModals() {
  const { modal } = useModalContext();
  const { loggedInUser } = useAuth();

  const getGreeting = () => {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
      return "Good morning";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <>
      {loggedInUser && modal === "loggedInModal" ? (
        <Modal success>
          {getGreeting()}, {loggedInUser.firstName}
        </Modal>
      ) : null}
      {modal === "loginFailure" ? (
        <Modal failure>Error logging in!</Modal>
      ) : null}
      {modal === "successDelete" ? (
        <Modal success>Task deleted successfully!</Modal>
      ) : null}
      {modal === "failureDelete" ? (
        <Modal failure>Error to delete task!</Modal>
      ) : null}
      {modal === "successEditTask" && (
        <Modal success>Task edited successfully!</Modal>
      )}
      {modal === "failureEditTask" && (
        <Modal failure>Error to edit task!</Modal>
      )}
      {modal === "successPinned" && (
        <Modal success>Task pinned successfully!</Modal>
      )}
      {modal === "successUnPinned" && (
        <Modal success>Task unpinned successfully!</Modal>
      )}
      {modal === "failurePinned" && <Modal failure>Error to pin task!</Modal>}
      {modal === "failureUnPinned" && (
        <Modal failure>Error to unpin task!</Modal>
      )}
      {modal === "successTodoChecked" && (
        <Modal success>Good job, keep going!</Modal>
      )}
      {modal === "successTodoUnchecked" && (
        <Modal success>Todo unchecked!</Modal>
      )}
      {modal === "failureTodoUnchecked" && (
        <Modal failure>Error to change status!</Modal>
      )}
      {modal === "successTodoDelete" && (
        <Modal success>Todo deleted successfully!</Modal>
      )}
      {modal === "failureTodoDelete" && (
        <Modal failure>Error to delete todo!</Modal>
      )}
      {modal === "successEditTodo" && (
        <Modal success>Todo title changed!</Modal>
      )}
      {modal === "failureEditTodo" && (
        <Modal failure>Error to change todo title!</Modal>
      )}
      {modal === "successCreateTodo" && (
        <Modal success>Todo created successfully!</Modal>
      )}
      {modal === "failureCreateTodo" && (
        <Modal failure>Error to create todo!</Modal>
      )}
      {modal === "successCreateTask" && (
        <Modal success>Task created successfully!</Modal>
      )}
      {modal === "failureCreateTask" && (
        <Modal success>Error creating task!</Modal>
      )}
      {modal === "successCreateArchive" && (
        <Modal success>Task moved to archive!</Modal>
      )}
      {modal === "failureCreateArchive" && (
        <Modal success>Error to delete task!</Modal>
      )}
    </>
  );
}

export default IndicationModals;
