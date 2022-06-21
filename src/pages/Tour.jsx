import React from 'react';

const styles = {
  section: {
    backgroundColor: "yellow",
    height: "100vh"
  },
  h1: {
    fontSize: "8em"
  }
};

export default function Tour() {
    return (
      <div style={styles.section}>
          <h1 style={styles.h1}>TOUR PAGE</h1>
      </div>
    )
}

// export default Tour;