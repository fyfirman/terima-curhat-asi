import React from 'react';
import { ScrollView } from 'react-native';
import { InfoItem } from '../../Components';

const propTypes = {};

const defaultProps = {};

const Baby = () => {
  return (
    <ScrollView>
      <InfoItem label="Usia Kehamilan Saat Melahirkan" info="36 minggu" />
      <InfoItem label="Berat Badan Bayi" info="26 kg" />
      <InfoItem label="Panjang Badan Bayi" info="55 cm" />
      <InfoItem label="Diameter Kepala Bayi" info="20 cm" />
      <InfoItem label="Jenis Kelamin" info="Laki-laki" />
      <InfoItem label="IMD" info="Ya" />
      <InfoItem label="Peletakan 1 jam" info="Ya" />
      <InfoItem label="Asupan" info="ASI" />
    </ScrollView>
  );
};

Baby.propTypes = propTypes;
Baby.defaultProps = defaultProps;

export default Baby;
