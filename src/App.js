import { useState } from "react";
// Importing components
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
  const [dialog, setDialog] = useState(false);

  const openDialog = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <div className="container">
      <StarRating />
      <button className="btn open-dialog" onClick={openDialog}>
        Open Dialog
      </button>
      {dialog && <Dialog closeDialog={closeDialog} />}
    </div>
  );
}

export default App;
