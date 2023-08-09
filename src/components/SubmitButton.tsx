const SubmitButton = ({ disabled = false }: { disabled?: boolean }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-default disabled:hover:bg-blue-500"
      disabled={disabled}
    >
      Soumettre
    </button>
  );
};

export default SubmitButton;
