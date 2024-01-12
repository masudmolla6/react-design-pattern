import React, { useEffect, useRef } from 'react';
import CustomInput from '../components/CustomInput';

const UseRefExample = () => {
    const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  },[])

    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1 className="">UseRef</h1>
          <form>
            <CustomInput ref={myRef} className="border border-blue-500"></CustomInput>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
};

export default UseRefExample;