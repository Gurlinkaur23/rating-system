function Dialog({ closeDialog }) {
  return (
    <section className="dialog-container">
      <button className="btn close-dialog" onClick={closeDialog}>
        Close Dialog
      </button>
    </section>
  );
}

export default Dialog;
