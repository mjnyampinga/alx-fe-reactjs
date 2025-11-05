/* Receives props: name, age, bio */
export default function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        background: '#f9fafb',
      }}
    >
      <h2 style={{ color: 'blue', margin: '0 0 6px' }}>{name}</h2>
      <p style={{ margin: '0 0 4px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{age}</span>
      </p>
      <p style={{ margin: 0 }}>Bio: {bio}</p>
    </div>
  );
}
