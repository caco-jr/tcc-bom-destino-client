import { render } from '@test/testUtils';

import MedicalAppointment from './MedicalAppointment';

describe('MedicalAppointment', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<MedicalAppointment />);

    expect(
      getByRole('heading', { name: /MedicalAppointment/i })
    ).toBeInTheDocument();
  });
});