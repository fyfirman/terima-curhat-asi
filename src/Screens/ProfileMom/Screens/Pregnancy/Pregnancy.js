import React from 'react';
import { ScrollView } from 'react-native';
import { InfoItem } from '../../Components';

const propTypes = {};

const defaultProps = {};

const Pregnancy = () => {
  return (
    <ScrollView>
      <InfoItem label="Tinggi Badan Sebelum Hamil" info="150 cm" />
      <InfoItem label="Tinggi Badan Setelah Hamil" info="148 cm" />
      <InfoItem label="Berat Badan Sebelum Hamil" info="54 kg" />
      <InfoItem label="Berat Badan Setelah Hamil" info="60 kg" />
      <InfoItem label="Kehamilan ke-" info="1" />
      <InfoItem
        label="Penyakit/Keluhan Saat Hamil"
        info={'Tidak keluar ASI\nNyeri ketika BAB'}
      />
    </ScrollView>
  );
};

Pregnancy.propTypes = propTypes;
Pregnancy.defaultProps = defaultProps;

export default Pregnancy;
