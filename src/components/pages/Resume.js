import resumePdf from "../../images/resume.pdf";

export default function Resume() {
  const styles = {
    containerStyle: {
      height: "100vh",
      width: "87%",
    },
  };

  return (
    <section className="resumeCon" style={styles.containerStyle}>
        <object data={ resumePdf } type="application/pdf" width="100%" height="100%">
  </object>
     
    </section>
  );
}
