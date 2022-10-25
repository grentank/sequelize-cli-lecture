const { Client, Song } = require('./db/models');

const pretty = (obj) => console.log(JSON.parse(JSON.stringify(obj)));

((async function run() {
  try {
    // const song = await Song.create({
    //   title: 'The Wall',
    //   duration: 350,
    // });
    // const client = await Client.create({
    //   name: 'Alex',
    //   score: 26,
    //   favoriteId: 1,
    // });
    // const song = await Song.create({
    //   title: 'Highway to Hell',
    //   duration: 301,
    // });
    // await Song.create({
    //   title: 'Numb',
    //   duration: 401,
    // });
    // await Song.create({
    //   title: 'Rasputin',
    //   duration: 301,
    // });
    // await Song.create({
    //   title: 'Hotel California',
    //   duration: 187,
    // });
    // await Client.create({
    //   name: 'Bob',
    //   score: 44,
    //   favoriteId: 3,
    // });
    // await Client.create({
    //   name: 'Charlie',
    //   score: 13,
    //   favoriteId: 3,
    // });
    // await Client.create({
    //   name: 'Dima',
    //   score: 95,
    //   favoriteId: 3,
    // });
    // await Client.create({
    //   name: 'Sergey',
    //   score: 50,
    //   favoriteId: 2,
    // });
    // await Client.create({
    //   name: 'George',
    //   score: 50,
    //   favoriteId: 5,
    // });
    // const songs = await Song.findAll();
    // const song = await Song.findOne({
    //   where: {
    //     title: 'Numb',
    //   },
    // });
    // pretty(song);// , pretty(client));
    // const clients = await Client.findAll({
    //   where: {
    //     name: 'Sergey',
    //   },
    //   include: Song,
    // });
    // pretty(clients[0].Song.title);
    // await Client.destroy({
    //   where: {
    //     name: 'Sergey',
    //   },
    // });
    // const clients = await Client.findAll();
    // pretty(clients);
    // await Client.update({
    //   score: 100,
    // }, {
    //   where: {
    //     name: 'George',
    //   },
    // });
    // const george = await Client.findOne({
    //   where: {
    //     name: 'George',
    //   },
    // });
    // george.score = 10;
    // await george.save();
    // const clients = await Client.findAll({
    //   where: {
    //     name: 'George',
    //   },
    // });
    const songs = await Song.findByPk(3, {
      include: Client,
    });
    pretty(songs);
  } catch (error) {
    console.log(error);
  }
})());
