import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const back = () => {
  window.location.replace('/')
}

const NotFound: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={() => back()}>Back Home</Button>}
  />
);

export default NotFound;