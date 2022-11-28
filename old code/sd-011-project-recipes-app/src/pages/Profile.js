import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';

export default function Profile() {
  return (
    <div>
      <Header title="Perfil" />
      <h1 data-testid="page-title">Perfil</h1>
      <Footer />
    </div>
  );
}
