const styles = {
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#141414',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    animation: 'fade-in 1.2s',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1rem',
    color: '#ccc',
  },
};

// Animação fade-in via CSS global (caso esteja usando CSS puro)
// Se estiver usando styled-components ou emotion, esse trecho abaixo não é necessário

export default styles;
