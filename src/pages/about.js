import React from 'react';
import Director from '../components/About/Director';
import Staff from '../components/About/Staff';
import { PageHeaders } from '../components/PageHeaders';


const about = (title) => {
  return (
    <>
    <PageHeaders title={"About"} />
    <Director />
    <Staff />
    </>
  )
}

export default about