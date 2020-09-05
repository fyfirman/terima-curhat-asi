import React from 'react';
import { ScrollView } from 'react-native';
import { InfoItem } from '../../Components';

const propTypes = {};

const defaultProps = {};

const Moms = () => {
  return (
    <ScrollView>
      <InfoItem label="Nama" info="Mira Suryani" />
      <InfoItem label="Tanggal Lahir" info="24 Agustus 1989" />
      <InfoItem label="Agama" info="Islam" />
      <InfoItem label="Golongan Darah" info="O" />
      <InfoItem label="Status Pernikahan" info="Menikah" />
      <InfoItem label="Pendidikan" info="Perguruan Tinggi (S2)" />
      <InfoItem label="Pekerjaan/Profesi" info="Dosen" />
      <InfoItem
        label="Alamat"
        info="Jl. Saluyu XV A no. 11, Kel. Srimahi, Kec. Ciparay, Kabupaten Bandung, Jawa Barat"
      />
    </ScrollView>
  );
};

Moms.propTypes = propTypes;
Moms.defaultProps = defaultProps;

export default Moms;
