import { useState,lazy,Suspense } from "react";

const LazyComponentA = lazy(()=>import('./components/ComponentA'));
const LazyComponentB = lazy(()=>import('./components/ComponentB'));
const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button onClick={() => setCompA((prev) => !prev)}>ComponentA</button>
      <Suspense fallback={<div>Loading</div>}>
        {compA ? <LazyComponentA/>:<LazyComponentB/>}
      </Suspense>
    </>
  );
};

export default Example;
