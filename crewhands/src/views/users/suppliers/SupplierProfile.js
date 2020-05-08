import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Header from '../../../components/Header'
import SuppliersNavigation from '../../../components/suppliers/navigation/SuppliersNavigation'
import SupplierHandsList from '../../../components/suppliers/profile/SupplierHandsList'
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin-left: 45px;

  @media only screen and (min-width: 601px) {
    padding-left: 140px;
  }
`
const Linke = styled(Link)`
  color: #0a6284;
  text-shadow: -1px 0 whitesmoke, 0 1px whitesmoke, 1px 0 whitesmoke,
    0 -1px whitesmoke;
  transition: all 0.8s ease;
`

const SupplierProfile = () => {
  return (
    <div>
      <Header />
      <Section>
        <SuppliersNavigation />
        <h3>Hallo /name of supplier !</h3>
        <Link to="/suppliers-profile-form">
          <p>Profil bearbeiten</p>
        </Link>
        <SupplierHandsList />
      </Section>
    </div>
  )
}

export default SupplierProfile
