import { useState } from 'react';
import Container from '@material-ui/core/Container';

import * as S from './MedicalAppointment.styles';
import Layout from '@components/Layout';
import MedicalAppointmentAdd from './components/Add';
import MedicalAppointmentList from './components/List';
import AppointmentService from '@services/api/appointment';
import MedicalAppointmentUpdate from './components/Update';
import { getToken } from '@utils/cookies';

export const MedicalAppointmentPage = ({ appointments }): JSX.Element => {
  const [appointmentsList, setAppointmentsList] = useState(appointments);
  const [open, setOpen] = useState(false);
  const [appointmentSelected, setAppointmentSelected] = useState({});

  const getAppointments = async () => {
    const appointmentAPI = new AppointmentService();
    const updatedAppointments = await appointmentAPI.getAll(getToken());

    setAppointmentsList(updatedAppointments);
  };

  const handleAppointmentSelected = appointment => {
    setOpen(true);
    setAppointmentSelected(appointment);
  };

  return (
    <Layout title="Consultas">
      <S.Wrapper>
        <Container fixed>
          <h1>Consultas</h1>

          <MedicalAppointmentAdd updateScreen={getAppointments} />

          <MedicalAppointmentUpdate
            updateScreen={getAppointments}
            isOpen={open}
            handleModalClose={() => setOpen(false)}
            appointment={appointmentSelected}
          />

          <MedicalAppointmentList
            list={appointmentsList}
            handleSelected={handleAppointmentSelected}
          />
        </Container>
      </S.Wrapper>
    </Layout>
  );
};

export default MedicalAppointmentPage;
