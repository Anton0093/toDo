import React, { Fragment, useContext, useEffect } from "react";
import Form from "../components/Form";
import Loader from "../components/Loader";
import Notes from "../components/Notes";
import { firebaseContext } from "../context/firebase/firebaseContext";

const Home = () => {
  const { loading, notes, fetchNotes, removeNote } =
    useContext(firebaseContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Form />

      <hr></hr>

      {loading 
        ? <Loader /> 
        : <Notes notes={notes} onRemove={removeNote} />}
    </Fragment>
  );
};

export default Home;
