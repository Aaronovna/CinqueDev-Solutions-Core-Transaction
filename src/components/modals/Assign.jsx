import React from "react";
import { Modal, ModalDialog, Divider, Select, Option, Button } from "@mui/joy";
import { employees } from "../../data/employee";

const Assign = (props) => {
  const { openModal, setOpenModal, title } = props;

  return (
    <Modal open={openModal} onClose={() => { setOpenModal(false) }}>
      <ModalDialog layout="center" variant="plain">
        <p>{title}</p>
        <Divider />
        <Select>
          {
            employees.map((employee, index)=>{
              return (
                <Option key={index} value={employee}>{employee}</Option>
              )
            })
          }
        </Select>
        <Button className="w-fit">Assign</Button>
      </ModalDialog>
    </Modal>
  )
}

export default Assign;