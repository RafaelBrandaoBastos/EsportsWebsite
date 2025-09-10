import { useEffect } from 'react';
import styles from './style';

function CamisasRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://forms.gle/SW519T9dS9t3zF6T6';
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Indo para o formulário das camisas!</h1>
      <p style={styles.text}>Você será redirecionado em instantes.</p>
    </div>
  );
}

export default CamisasRedirect;
