import React, { useEffect, useState } from 'react'
import apiFilmes from '../../services/apiFilmes'
import { Card, IconButton, Text } from 'react-native-paper'
import { Image, View } from 'react-native'

const Atores = ({ navigation, route }) => {

    const [ator, setAtores] = useState({})
    const [film, setFilm] = useState([])


    useEffect(() => {
        
        const id = route.params.id

        apiFilmes.get(`/person/${id}`).then(resultado => {
            setAtores(resultado.data)
        })

        apiFilmes.get(`/person/${id}/movie_credits`).then(resultado => {
            setFilm(resultado.data.cast)
        })
    }, [])

    return (
    <>
            <View style={{ padding: 15 }}>

                <Card style={{ marginBottom: 15 }}>

                    <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + ator.profile_path }} />
                    <Card.Content style={{ marginBottom: 15 }}>
                        <Text variant="bodyMedium">Nome: {ator.name}</Text>
                        <Text variant="bodyMedium">{ator.biography}</Text>
                    </Card.Content>
                </Card>
                <Card style={{marginBottom:15}}>
                <Card.Content>
                    <Text variant="bodyMedium">Data de nascimento:{ator.birthday}</Text>
                    <Text variant="bodyMedium">Lugar de nascimento:{ator.place_of_birth}</Text>
                   
                </Card.Content>
            </Card>
            <Text variant='titleLarge' classname='textcenter'>filmes</Text>
            
            {film.map(item => (
               <Card mode='outlined' 
               key={item.id}
               >
               <Card.Title
               title={item.title}
               subtitle={item.release_date}
               left={(props) =>

                   <Image 
                   source={{uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path}}
                   style={{width: 40, height:40, borderRadius:20}}
                   />
               }   
               right={(props) => <IconButton{...props} icon="dots-vertical" 
           />
       }           
             />
               </Card>
            )

            )}
                </View>
            </>
            )
}

            export default Atores