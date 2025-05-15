import { useUpdateUserProfileMutation } from "../../../store/api/apiSlice";
import { useState, useEffect } from "react";
import styles from "./EditProfileForm.module.scss";

function EditProfileForm({ initialFirstName, initialLastName, onCancel, onSuccess }) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [updateProfileApi, { isLoading: isUpdating, error: updateError }] = useUpdateUserProfileMutation();

  useEffect(() => {
    if (initialFirstName || initialLastName) {
      setFirstName(initialFirstName || "");
      setLastName(initialLastName || "");
    }
  }, [initialFirstName, initialLastName]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await updateProfileApi({ firstName, lastName }).unwrap();
      onSuccess();
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <>
      <h1>Welcome back</h1>
      <h2 className="sr-only">Edit Profile firstName and lastName</h2>
      <form className={styles.formEdit} onSubmit={handleSubmit}>
        <div className={styles.formEditInputs}>
          <input id="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
          <input id="lastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
        <div className={styles.formEditButtons}>
          <button type="submit" disabled={isUpdating}>
            Save
          </button>
          <button className={styles.btnCancel} type="button" onClick={onCancel} disabled={isUpdating}>
            Cancel
          </button>
        </div>
        {updateError && (
          <p className={styles.errorMessage} role="alert">
            Error: {updateError.data?.message || "Failed to update profile"}
          </p>
        )}
      </form>
    </>
  );
}

export default EditProfileForm;
