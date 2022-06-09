import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { useParams } from "react-router";
import Event from "../../domain/Event";
import useFetch from "../../hooks/useFetch";
import Button from "../../components/button";

import CalendarIcon from "../../assets/calendar.svg";
import LocationIcon from "../../assets/location.svg";
import ParticipantsIcon from "../../assets/participants.svg";

type Params = {
  id: string;
};

type Participants = {
  uid: string;
  picUrl: string;
  displayName: string;
};

type EventFull = {
  picUri: string;
  location: string;
  people: {
    current: number;
    total: number;
  };
  participants?: Participants[];
};

const event$: Event & EventFull = {
  id: 7,
  picUri:
    "https://shop.meeplehouse.ru/upload/iblock/ef1/ef144fa9b8756d21ca72dda096bf250b.jpg",
  title: "Название ивента 7",
  desc: "Всем привет! Хотел бы собраться поиграть в Серп в аниткафе. У меня есть все допы, можем набрать что хотим. А ещё есть металические монеты)))",
  date: "21 марта 2022",
  time: "21:00",
  location: "пр-т Пупсиков, ул. Добрых, д 42",
  people: {
    current: 4,
    total: 7,
  },
  participants: [
    {
      uid: "hash123",
      picUrl:
        "https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-23.jpg",
      displayName: "Абрагим Абрагимов",
    },
    {
      uid: "hash1233",
      picUrl:
        "https://avatars.mds.yandex.net/get-zen_doc/1712263/pub_60225e73ff10a04637b884ce_60225f3ed6ee573249284b92/scale_1200",
      displayName: "Абрагим Абрагимов",
    },
    {
      uid: "hash1234",
      picUrl: "https://spanishlove.ru/wp-content/uploads/2019/09/muzchina.jpg",
      displayName: "Абрагим Абрагимов",
    },
    {
      uid: "hash1235",
      picUrl:
        "https://feminissimo.ru/core/fileman/Uploads/%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D1%8F/%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0%20%D0%BB%D0%B8%D0%B4%D0%B5%D1%80/uverennost_v_muzhchine_0.jpg",
      displayName: "Абрагим Абрагимов",
    },
    {
      uid: "hash1236",
      picUrl:
        "https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-23.jpg",
      displayName: "Абрагим Абрагимов",
    },
  ],
};

const EventPage: React.FC = () => {
  const { id } = useParams<Params>();
  const [event, setEvent] = React.useState<Event & EventFull>(event$);
  // const [fetch, isLoading, error] = useFetch();
  const [participants, setParticipants] = React.useState<any>([]);

  const loadEvent = async () => {
    const event$ = await fetch("http://13.38.229.216:5000/api/events/" + id, {
      method: "GET",
    }).then(res => res.json());
    setEvent(event$);

    const people = await fetch(
      "http://13.38.229.216:5000/api/events/participation/" + id,
      {
        method: "GET",
      },
    )
      .then(res => res.json())
      .catch(e => console.log(e));
    console.log("People:", people);
    setParticipants(people);
  };

  React.useEffect(() => {
    loadEvent();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* {isLoading && (
        <View>
          <Text>{"Loading..."}</Text>
        </View>
      )}
      {error && (
        <View>
          <Text>{error}</Text>
        </View>
      )} */}
      <ScrollView>
        <View style={styles.event}>
          <Image
            style={styles.image}
            source={{
              uri:
                event.picUri ||
                "https://shop.meeplehouse.ru/upload/iblock/ef1/ef144fa9b8756d21ca72dda096bf250b.jpg",
            }}
          />
          <View style={styles.eventContainer}>
            <Text style={styles.title}>{event.name}</Text>
            <View style={styles.info}>
              <View style={styles.infoLine}>
                <CalendarIcon style={styles.icon} />
                <Text style={styles.text}>{event.time}</Text>
              </View>
              <View style={styles.infoLine}>
                <LocationIcon style={styles.icon} />
                <Text style={styles.text}>{event.place}</Text>
              </View>
              <View style={styles.infoLine}>
                <ParticipantsIcon style={styles.icon} />
                <Text style={styles.text}>
                  {/* {event.people.current + "/" + event.people.total} */}
                  {"Максимум людей: " + event.max_player}
                </Text>
              </View>
            </View>
            <View style={styles.description}>
              <Text style={styles.text}>{event.comment}</Text>
            </View>
            <View style={styles.participants}>
              <View style={styles.participants_header}>
                <Text style={styles.participants_title}>
                  {"Список участников:"}
                </Text>
              </View>
              {participants.map((participant: any) => (
                <View key={participant.uid} style={styles.participant}>
                  <Image
                    style={styles.participants_icon}
                    source={{
                      uri: participant.picUrl,
                    }}
                  />
                  <Text style={styles.participants_title}>
                    {participant.first_name + " " + participant.second_name}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.button}>
              <Button title="Записаться" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  event: {
    flex: 1,
  },
  eventContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
  },
  image: {
    height: 160,
    resizeMode: "stretch",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: "#000000",
    fontWeight: "500",
  },
  info: {
    marginTop: 8,
    marginBottom: 8,
  },
  infoLine: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#000000",
    fontWeight: "400",
  },
  description: {
    marginTop: 16,
    marginBottom: 12,
  },
  participants: {
    borderWidth: 1,
    borderColor: "#F86624",
    borderRadius: 8,
    padding: 8,
  },
  participants_header: {
    marginBottom: 8,
  },
  participants_title: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#000000",
    fontWeight: "400",
  },
  participants_icon: {
    borderRadius: 30,
    height: 28,
    width: 28,
    marginRight: 12,
  },
  participant: {
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 8,
  },
  button: {
    marginTop: 12,
    // position: "absolute",
    // bottom: 0,
    // left: "50%",
    // right: "50%",
  },
});
