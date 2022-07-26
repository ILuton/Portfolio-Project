import Form from "../Form";

export default function Contact() {
  const styles = {
    containerStyle: {
      height: "100vh",
      width: "85%",
      display: "flex",
      justifyContent: "center",
    },
  };
  return (
    <section style={styles.containerStyle}>
      <Form></Form>
    </section>
  );
}
