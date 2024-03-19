/* eslint-disable no-restricted-imports */
import { SmileOutlined } from '@ant-design/icons';
import { Button, Dropdown, Modal, Space } from 'antd';
import {  useState } from 'react';


const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        {'1st menu item'}
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        {'2nd menu item (disabled)'}
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        {'3rd menu item (disabled)'}
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

const Test = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {'hello'}

      <Button type="primary" onClick={showModal}>
        {'Open Modal'}
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{'Some contents...'}</p>
        <p>{'Some contents...'}</p>
        <p>{'Some contents...'}</p>
      </Modal>

      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>{'Hover me'}</Space>
        </a>
      </Dropdown>
    </>
  );
};

export default Test;
