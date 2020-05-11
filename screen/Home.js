import React from 'react'

import { StatusBar } from 'react-native'

import styled from 'styled-components/native'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Tabs from '../components/Tabs'

const Container = styled.View`
	flex: 1;
	background: transparent;
`

import api from '../services/api'

const Home = () => {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<Container>
				<Header />
				<Hero videos={api} />
				<Tabs />
			</Container>
		</>
	)
}

export default Home
