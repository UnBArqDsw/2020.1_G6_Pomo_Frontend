import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
  Container,
  Graphics,
  LGraphics,
  Title,
  Info,
  TitleOfEachChart,
} from './styles';

import {LineChart} from 'react-native-chart-kit';

export default function Stats() {
  const users = [
    {name: 'grafico 1'},
    {name: 'grafico 2'},
    {name: 'grafico 3'},
    {name: 'grafico 4'},
  ];

  return (
    <Container>
      <Title>{'Estatísticas'}</Title>
      <Graphics
        data={users}
        keyExtractor={(user) => String(user.name)}
        renderItem={({item}) => (
          <LGraphics>
            <Info>
              <TitleOfEachChart>
                {'Arquitetura e Desenho de Software'}
              </TitleOfEachChart>
              <LineChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get('window').width / 1} // from react-native
                height={180}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#000',
                  backgroundGradientFrom: '#e91e63',
                  backgroundGradientTo: '#9a0f3e',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 20,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 50,
                }}
              />
            </Info>
          </LGraphics>
        )}
      />
    </Container>
  );
}
