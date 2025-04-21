import { useEffect, useState } from "react";
import App from "./App";
import { Button, notification, Space } from "antd";
import { PlusOutlined, MinusOutlined, ReadOutlined } from '@ant-design/icons';
function Test({ name }) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count update:${count}`);
    if (count === 5) {
      notification.info({
        message: "Milestone Reached",
        description: "Count is at 5 ",
      });
    }
  }, [count]);

  const handelReset = () => setCount(0);

  return (
    <div style={{marginTop:30}}>
     <h2>Hello, {name || "Arjun"}</h2>
      

<h1>Counter:{count}</h1>


<Space>



<Button type="primary" icon={<PlusOutlined/>}  onClick={()=> setCount(count+1)} >

Increase

</Button>
<Button type="primary" icon={<MinusOutlined/>} onClick={()=> setCount(count-1)}>

Decrease

</Button>

<Button type="default" icon={<ReadOutlined/>} onClick={handelReset}>

Reset

</Button>

</Space>

    </div>
  );
}
export default Test;
