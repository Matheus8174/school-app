import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

import Text from '@/ui/text';

import professor from '@/assets/imgs/professor.png';
import studant from '@/assets/imgs/studant.png';
import admin from '@/assets/imgs/aula-on-line.png';

import Button from '@/ui/button';
import FloatAction from '@/ui/float-action';

type ItemProps = {
  image: ImageSourcePropType;
  desc: string;
  title: string;
};

function Item({ image, desc, title }: ItemProps) {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View className="flex-row gap-4 justify-center items-center">
        <Image source={image} />
        <View className="flex-1 justify-around gap-2">
          <Text variant="h3">{title}</Text>
          <Text className="text-grey">{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function ChooseRole() {
  return (
    <View className="px-9 py-10 gap-20  flex-1">
      <Text variant="h1" className="self-center">
        Quem é você?
      </Text>

      <Item
        title="Professor:"
        image={professor}
        desc="Ser professor é guiar jornadas de conhecimento, iluminando caminhos e
      despertando sonhos."
      />

      <Item
        title="Estudante:"
        image={studant}
        desc="Como aluno, estou sempre em busca de conhecimento, com curiosidade e sede de aprender."
      />

      <Item
        title="Administrador:"
        image={admin}
        desc="Administrar um espaço virtual de aprendizagem é criar um ambiente onde o conhecimento floresce e as conexões se fortalecem."
      />

      <View className="mt-auto">
        <FloatAction className="bg-black-50 self-start">
          <Entypo name="chevron-right" size={30} color="#536eff" />
        </FloatAction>
      </View>
    </View>
  );
}
// Como aluno, estou sempre em busca de conhecimento, com curiosidade e sede de aprender. Cada descoberta é um passo na minha jornada, e cada desafio, uma oportunidade de crescer. Acredito no poder da educação para transformar minha vida e o mundo ao meu redor.

// Administrar um espaço virtual de aprendizagem é criar um ambiente onde o conhecimento floresce e as conexões se fortalecem. Meu papel é facilitar o acesso ao saber, garantindo que cada recurso e ferramenta esteja ao alcance de todos. Acredito que, ao apoiar a jornada de cada usuário, estou contribuindo para um futuro mais conectado e colaborativo.
export default ChooseRole;
