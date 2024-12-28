import useCustomDetails from '../Handels/useCustomDetails';

const CustomDetails = ({ summary, children }) => {
  const { isOpen, setIsOpen, detailsRef } = useCustomDetails();

  return (
    <details ref={detailsRef}>
      <summary onClick={() => setIsOpen(!isOpen)}>{summary}</summary>
      {children}
    </details>
  );
};

export default CustomDetails;