import React from 'react';
import * as ReactNative from 'react-native';

const styles = ReactNative.StyleSheet.create({
  pageBackground: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    height: '90%',
    borderRadius: 5,
    minHeight: 750,
  },
  imageLogo: {
    width: '40%',
    height: 30,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  inputText: {
    height: 25,
    margin: 0,
    paddingLeft: 15,
    width: '90%',
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    width: '90%',
  },
  space: {
    margin: 20,
  },
  button: {
    backgroundColor: '#1565c0',
    width: '60%',
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  leaveButton: {
    color: '#1565c0',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    height: 30,
  },
  divTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divHome: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: 400,
    height: 550,
    alignSelf: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  divHeaderHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  divWelcomeHome: {
    marginBottom: 30,
    color: '#0a0a0a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  divCards: {
    flexDirection: 'column',
    maxHeight: 420,
    width: '80%',
    margin: 'auto',
    alignSelf: 'center',
  },
  skillCard: {
    flexDirection: 'column',
    color: '#0a0a0a',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    maxWidth: '80%',
    borderColor: 'grey',
    borderWidth: 1,
    width: '90%',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: '90%',
    minHeight: 400,
    zIndex: 21,
    borderRadius: 20,
    marginTop: 100,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalLabel: {
    fontSize: 18,
    width: '100%',
    maxWidth: '90%',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'grey',
  },
  modalLabelBold: {
    fontSize: 18,
    width: '100%',
    maxWidth: '90%',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'grey',
    fontWeight: 'bold',
  },
  modalInput: {
    width: '100%',
    maxWidth: '90%',
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    backgroundColor: 'white',
  },
  buttonModal: {
    width: '100%',
    maxWidth: 300,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#127e71',
    color: 'white',
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
  },
  recoverPasswordLabel: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'right',
  },
  divModalPassword: {
    width: '100%',
    maxWidth: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    backgroundColor: 'white',
  },
  modalInputPassword: {
    width: '100%',
    maxWidth: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
    padding: 5,
    backgroundColor: 'white',
  },
  modalTextarea: {
    height: 250,
    maxHeight: 250,
    width: '100%',
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
  },
  modalLabelResult: {
    fontSize: 18,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'grey',
    fontWeight: 'normal',
    textAlign: 'justify',
    maxWidth: '90%',
  },
  modalContentResult: {
    width: '100%',
    maxWidth: '90%',
    height: '95vh',
    zIndex: 21,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.4)',
  },
});

export default function Home({navigation}) {
  const [skills, setSkills] = React.useState('');
  const [welcomeText, setWelcomeText] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [skillToShow, setSkillToShow] = React.useState('');
  const [skillUpdated, setSkillUpdated] = React.useState('');

  React.useEffect(() => {
    loadUser();
    loadSkills();
  }, []);

  const loadUser = async () => {
    let user = 'Usuário logado';
    // let url = "http:localhost:4000/skills"
    // const res = await fetch("", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode: "no-cors"
    // });
    // const json = await res.json();
    // user = json !== null ? json : null;
    // var formatName = user.name.split(" ");

    var formatName = user.split(' ');

    setWelcomeText('Olá, ' + formatName[0]);
  };

  const loadSkills = async () => {
    let skills = [
      {
        id: '0',
        username: 'abc@email.com',
        name: 'Javascript',
        description: 'Descricao 1',
        image_url: '',
        skill_level: '3',
      },
      {
        id: '1',
        username: 'def@email.com',
        name: 'PHP',
        description: 'Descricao 2',
        image_url: '',
        skill_level: '2',
      },
      {
        id: '2',
        username: 'ghi@email.com',
        name: 'C#',
        description: 'Descricao 3',
        image_url: '',
        skill_level: '1',
      },
      {
        id: '3',
        username: 'jkl@email.com',
        name: 'Java',
        description: 'Descricao  4',
        image_url: '',
        skill_level: '1',
      },
    ];

    // let url = "http:localhost:4000/skills"
    // const res = await fetch("", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode: "no-cors"
    // });
    // const json = await res.json();
    // skills = json !== null ? json : null;

    return setSkills(skills);
  };

  const changeUserSkill = user => {
    let skillsBefore = skills;
    skillsBefore[user.id].name = skillUpdated;

    // let url = "http:localhost:4000/skills"
    // const res = await fetch("", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({skillsBefore[user.id]})
    // });
    // const json = await res.json();
    // skills = json !== null ? json : null;

    setSkills(skillsBefore);
    setShowModal(false);
  };

  const Modal = ({}) => {
    return (
      <ReactNative.View key={skillToShow.id} style={styles.modalBackground}>
        <ReactNative.View style={styles.modalContent}>
          <ReactNative.View style={styles.modalTop}>
            <ReactNative.Text style={styles.modalTitle}>
              Detalhes
            </ReactNative.Text>
            <ReactNative.Text
              style={styles.modalCloseButton}
              onClick={() => {
                setShowModal(false);
              }}>
              &times;
            </ReactNative.Text>
          </ReactNative.View>

          <ReactNative.View style={styles.modalBodyContent}>
            <ReactNative.Text style={styles.modalLabelBold}>
              {skillToShow.username}
            </ReactNative.Text>
            <ReactNative.Text style={styles.modalLabel}>
              {skillToShow.name}
            </ReactNative.Text>
            {/* <br />
            <br /> */}

            <ReactNative.Text style={styles.modalLabelBold}>
              Habilidade
            </ReactNative.Text>
            {/* <select
              style={styles.modalInput}
              id="skillSelect"
              value={skillUpdated}
              onChange={e => {
                setSkillUpdated(e.target.value);
              }}>
              <option value="">Selecione</option>
              <option value="Javascript">Javascript</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Java">Java</option>
            </select> */}

            {/* {skills.map((item, index) => {
                  return <option value={item.name} >{item.name}</option>
                })} */}

            <ReactNative.Button
              title="Salvar"
              style={styles.buttonModal}
              onClick={() => {
                changeUserSkill(skillToShow);
              }}
            />
          </ReactNative.View>
        </ReactNative.View>
      </ReactNative.View>
    );
  };

  const SkillsCard = ({item}) => {
    return (
      <ReactNative.View
        key={item.id}
        style={styles.skillCard}
        onClick={() => {
          setShowModal(true);
          setSkillToShow(item);
        }}>
        <ReactNative.Text>{item.username}</ReactNative.Text>
        <ReactNative.View
          style={{
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <ReactNative.Text>{item.name}</ReactNative.Text>
          <ReactNative.Text> Skill Level: {item.skill_level}</ReactNative.Text>
        </ReactNative.View>
      </ReactNative.View>
    );
  };

  const SkillsCardMap = ({}) => {
    return skills !== ''
      ? skills.map(item => {
          return <SkillsCard key={item.id} item={item} />;
        })
      : null;
  };

  return (
    <ReactNative.SafeAreaView style={styles.pageBackground}>
      <ReactNative.View style={styles.box}>
        <ReactNative.View style={styles.divTop}>
          <ReactNative.Image
            style={styles.imageLogo}
            source={{
              uri: 'http://www.neki-it.com.br/brand/assets/images/logo-neki-oficial-1596x452.png',
            }}
          />
          <ReactNative.Text
            style={styles.leaveButton}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Sair
          </ReactNative.Text>
        </ReactNative.View>
        <ReactNative.View style={styles.space} />

        <ReactNative.View style={styles.divWelcomeHome}>
          <ReactNative.Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {welcomeText}
          </ReactNative.Text>
        </ReactNative.View>
        <ReactNative.View style={styles.divCards}>
          <SkillsCardMap />
        </ReactNative.View>

        {showModal && <Modal key={skillToShow.id} />}
      </ReactNative.View>
    </ReactNative.SafeAreaView>
  );
}
