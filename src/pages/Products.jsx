
import React, { useEffect, useState } from 'react';
import {
  Table, Card, Button, Modal, Form, Input, InputNumber, notification, Dropdown, Menu, Space
} from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import axios from 'axios';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {

    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddOrUpdateProduct = async (values) => {
    try {
      if (editingProduct) {
        const updated = { ...editingProduct, ...values };
        setProducts((prev) =>
          prev.map((prod) => (prod.id === editingProduct.id ? updated : prod))
        );
        notification.success({ message: 'Product updated (mocked)' });
      } else {
        const res = await axios.post('https://fakestoreapi.com/products', values);
        const newProduct = { ...res.data, ...values };
        setProducts((prev) => [newProduct, ...prev]);
        notification.success({ message: 'Product added (mocked)' });
      }

      setIsModalOpen(false);
      setEditingProduct(null);
      form.resetFields();
    } catch (err) {
      console.error(err);
      notification.error({ message: 'Failed to add/update product!' });
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    form.setFieldsValue(product);
    setIsModalOpen(true);
  };

  const handleDelete = (productId) => {
    setProducts((prev) => prev.filter((prod) => prod.id !== productId));
    notification.info({ message: 'Product removed from UI (mock)' });
  };

  const getMenu = (record) => (
    <Menu>
      <Menu.Item key="edit" onClick={() => handleEdit(record)}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" onClick={() => handleDelete(record.id)} danger>
        Delete
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: 'Product',
      dataIndex: 'title',
      key: 'title',
      render: (_, record) => (
        <Card
          title={
            <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{record.title}</span>
              <Dropdown overlay={getMenu(record)} trigger={['click']}>
                <MoreOutlined style={{ cursor: 'pointer' }} />
              </Dropdown>
            </Space>
          }
          cover={<img alt={record.title} src={record.image} style={{ height: 200, objectFit: 'contain' }} />}
        >
          <p><b>Price:</b> ${record.price}</p>
          <p><b>Category:</b> {record.category}</p>
          <p>{record.description.substring(0, 100)}...</p>
        </Card>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Button
        type="primary"
        onClick={() => {
          setEditingProduct(null);
          form.resetFields();
          setIsModalOpen(true);
        }}
        style={{ marginBottom: 16 }}
      >
        Add Product
      </Button>

      <Table
        columns={columns}
        dataSource={products}
        pagination={{ pageSize: 4 }}
        rowKey="id"
      />

      <Modal
        title={editingProduct ? 'Edit Product' : 'Add New Product'}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
          form.resetFields();
        }}
        onOk={() => form.submit()}
        okText={editingProduct ? 'Update' : 'Create'}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddOrUpdateProduct}
        >
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="description" label="Description" rules={[{ required: true }]}>
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item name="category" label="Category" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="image" label="Image URL" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Products;
