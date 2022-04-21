import React, { useEffect } from 'react';
import { Container } from '../../globalStyles';
import {
	ClientSection,
	ClientColumn,
	ClientTitle,
	ClientRow,
	ClientWrapper,
	ClientImage,
	ClientTextWrapper,
} from './ClientsStyles';
import { clientsData } from '../../data/ClientsData';
import { useInView } from 'react-intersection-observer';

const Clients = () => {

	const { ref, inView } = useInView({
		rootMargin: '-100px',
	});
	
	return (
		<ClientSection id="clients">
			<Container>
				<ClientTextWrapper>
					<ClientTitle>Skills</ClientTitle>
				</ClientTextWrapper>

				<ClientRow ref={ref} >
					{clientsData.map((clients, clientsIndex) => (
						<ClientColumn key={clientsIndex}>
							{clients.map((el, index) => (
								<ClientWrapper key={index}  className={inView && `animate__animated animate__fadeInUp animate__delay-${el.duration}s animate__faster`}>
									<ClientImage src={`./images/companies/${el.name}.png`} />
								</ClientWrapper>
							))}
						</ClientColumn>
					))}
				</ClientRow>
			</Container>
		</ClientSection>
	);
};

export default Clients;
