import { useState } from "react";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { selectProfile } from "../../store/profile/profileSlice";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import styles from "./Profile.module.scss";
import AccountCard from "./AccountCard/AccountCard";

function Profile() {
  // Set page title
  useDocumentTitle("My Account");

  const [isEditing, setIsEditing] = useState(false);
  const { firstName, lastName, isLoading, fetchError: error } = useSelector(selectProfile);

  if (isLoading) {
    return (
      <main className="bg-dark">
        <div className={styles.header}>
          <h1 className={styles.loadingProfileText}>Loading...</h1>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="bg-dark">
        <div className={styles.header}>
          <h1>Error loading profile</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-dark">
      <div className={styles.header}>
        {!isEditing ? (
          <>
            <h1>
              Welcome back
              <br />
              {firstName} {lastName}!
            </h1>
            <button className={styles.editButton} onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </>
        ) : (
          <EditProfileForm
            initialFirstName={firstName}
            initialLastName={lastName}
            onCancel={() => setIsEditing(false)}
            onSuccess={() => setIsEditing(false)}
          />
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>

      <AccountCard title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <AccountCard title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <AccountCard title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </main>
  );
}

export default Profile;
