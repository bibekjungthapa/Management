import React, { useState } from 'react';
import { Button, Drawer } from 'antd';


function Student() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  return (
    <>
      <h2>Arjun </h2>
  
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Arjun Drawer" onClose={onClose} open={open}>
        <p>CSR</p>
        <p>Student</p>
        <p>Learner</p>
      </Drawer>
    </>
  );
}

export default Student;
