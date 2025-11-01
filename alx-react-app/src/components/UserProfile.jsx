// src/components/UserProfile.jsx
function UserProfile({ name, age, bio }) {
  return (
    <section style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: 8, marginTop: '1rem' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </section>
  );
}

export default UserProfile;
