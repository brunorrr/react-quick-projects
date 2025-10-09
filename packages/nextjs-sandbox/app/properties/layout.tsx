import { FC, PropsWithChildren } from "react";

const PropertiesLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">Properties</h2>
      {children}
    </>
  );
};

export default PropertiesLayout;
