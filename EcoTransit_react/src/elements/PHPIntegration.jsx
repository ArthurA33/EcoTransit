import React, { Component } from 'react';

class PHPIntegration extends Component {
  constructor() {
    super();
    this.state = {
      phpContent: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost/ecotransit/index.php', {
      method: 'GET',
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json',
        // Autres en-têtes si nécessaires
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur réseau');
      }
      return response.text();
    })
    .then(data => this.setState({ phpContent: data }))
    .catch(error => {
      console.error('Erreur de récupération des données PHP', error);
      // Gérez l'erreur de manière appropriée ici, par exemple, en mettant à jour l'état avec un message d'erreur.
    });
  }

  render() {
    return (
      <div>
        <h1>Contenu PHP intégré dans React</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.phpContent }} />
      </div>
    );
  }
}

export default PHPIntegration;