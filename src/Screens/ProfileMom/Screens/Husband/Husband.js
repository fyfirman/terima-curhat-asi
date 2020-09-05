import React from 'react';
import { ScrollView } from 'react-native';
import { InfoItem } from '../../Components';

const propTypes = {};

const defaultProps = {};

const Baby = () => {
  return (
    <ScrollView>
      <InfoItem label="Nama" info="Ayi Muhammad Iqbal Nasuha" />
      <InfoItem label="Tempat Lahir" info="Majalengka" />
      <InfoItem label="Tanggal Lahir" info="10 Desember 1989" />
      <InfoItem label="Agama" info="Islam" />
      <InfoItem label="Pendidikan" info="SMA/SMK/MA" />
      <InfoItem label="Pekerjaan/Profesi" info="Karyawan Swasta" />
    </ScrollView>
  );
};

Baby.propTypes = propTypes;
Baby.defaultProps = defaultProps;

export default Baby;
