import axios from "axios";
import { useEffect, useState } from "react";
import "./Add.scss";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {Helmet} from "react-helmet";
const Add = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState('')
  const [sort, setsort] = useState(null)
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:4000/product");
    setdata(res.data);
  };
  const fetchdelete = async (id) => {
    await axios.delete(`http://localhost:4000/product/${id}`);
    fetchdata();
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchpost = async (values) => {
    await axios.post(`http://localhost:4000/product`, values);
    fetchdata();
  };

  return (
    <>
<Helmet>
               
                <title>Add page</title>
               
            </Helmet>
    <div className="admin">
        <div className="filtersort">
            <input type="text" onChange={(e)=>setfilter(e.target.value)} placeholder="search here"/>

            <div className="sort">
            <button onClick={()=>setsort(false)}>default</button>
                <button onClick={()=>setsort(true)}>from low to high</button>
                <button onClick={()=>setsort('false')}>from high to low</button>
            </div>
        </div>
      <Formik
        initialValues={{ image: "", name: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          price: Yup.number().required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          fetchpost(values);
          resetForm({ values: "" });
        }}
      >
        <Form>
          <label htmlFor="image">image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="name">name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="price">price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <table>
        <thead>
          <tr>
            <td>image</td>
            <td>name</td>
            <td>price</td>
            <td>CRUD</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data
            .filter(x=>x.name.toLowerCase().includes(filter.toLowerCase()))
            .sort((a,b)=>{
                if (sort && sort === true) {
                  return   (a.price-b.price)
                }
                else if (sort && sort === 'false') {
                  return  (b.price-a.price)
                }
                else{
                    return 0
                }
            })
            .map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>
                  <h2>{item.name}</h2>
                </td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => fetchdelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Add;
