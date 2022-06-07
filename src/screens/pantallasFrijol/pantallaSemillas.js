import React from "react"
import MapView ,{Marker}from "react-native-maps"
import {View,TouchableOpacity,Image,StyleSheet} from "react-native"

const PantallaSemilla = ({navigation}) => {
  return(
    <>
      <View style={styles.contenedorNavegacion}>
        <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("homeTabFrijol")}}>
            <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
        </TouchableOpacity>
      </View>

      <MapView style={{width:"100%",height:"85%"}}
      initialRegion={{
        latitude: 15.199999,
        longitude: -86.241905,
        latitudeDelta: 5.0922,
        longitudeDelta: 6.0421,
      }}
    >
      <Marker coordinate={{latitude:14.59886265,
                          longitude:-87.56736495
                          }}
              title="Carlos Humberto Rodas Aldana"
              description="COMAYAGUA,SAN JERÓNIMO/cel.96215516"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
      
      <Marker coordinate={{latitude:14.23031289,
                          longitude:-87.60163365
                          }}
              title="Edy Frank Velásquez canales"
              description="COMAYAGUA, LAMANÍ/cel.96407535"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />

      <Marker coordinate={{latitude:14.2312556,
                          longitude:-87.60468
                          }}
              title="Edy frank velasquez canales"
              description="COMAYAGUA, LAMANÍ/cel.87613319"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />

      <Marker coordinate={{latitude:14.38833991,
                          longitude:-87.70210812
                          }}
              title="German Rivera"
              description="COMAYAGUA, AJUTERIQUE/cel.98801371"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
      <Marker coordinate={{latitude:14.5396231,
                          longitude:-87.69956029
                          }}
              title="Jaime Antonio Fonseca"
              description="COMAYAGUA, EL TAMBORAL/cel.94566644"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
      <Marker coordinate={{latitude:14.24012224,
                          longitude:-87.60841123
                          }}
              title="Luis José lazo"
              description="COMAYAGUA, LAMANÍ/cel.99770767"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
      <Marker coordinate={{latitude:14.2845166,
                          longitude:-87.585974
                          }}
              title="Luis José lazo"
              description="COMAYAGUA, MARAGUA/cel.31523276"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
      <Marker coordinate={{latitude:14.31763721,
                          longitude:-87.55434351
                          }}
              title="María Angélica Letelier Alvares"
              description="COMAYAGUA, FLORES/cel.99224447"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
      <Marker coordinate={{latitude:14.2817973,
                          longitude:-87.5886596
                          }}
              title="Mario enrique Cerrato Mendoza"
              description="COMAYAGUA, LAMANÍ/cel.96708869"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
      <Marker coordinate={{latitude:14.200305,
                          longitude:-87.6248533
                          }}
              title="Orlin Bonilla Madrid"
              description="COMAYAGUA, LAMANÍ/cel.98671466"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
      <Marker coordinate={{latitude:14.38618567,
                          longitude:-87.69700838
                          }}
              title="Steven Joel López Discua"
              description="COMAYAGUA, PLAYITAS/cel.94556652"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:15.1098207,
                          longitude:-88.079686
                          }}
              title="Benigno Lopez"
              description="CORTES, EL LANILLAL/cel.99435795"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              /> 
            <Marker coordinate={{latitude:15.1025827,
                          longitude:-88.0757759
                          }}
              title="Esteban Padilla Ramirez"
              description="CORTES, LA PROVIDENCIA"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:15.1125147,
                          longitude:-88.0348001
                          }}
              title="Ever Leiva"
              description="CORTES, EL LANILLAL/cel.95430512"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:15.120529,
                          longitude:-88.0419037
                          }}
              title="Juan Pablo Garcia"
              description="CORTES, EL LANILLAL/cel.32532629"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:15.1184827,
                          longitude:-88.0410907
                          }}
              title="Manuel Cabrera"
              description="CORTES, EL LANILLAL/cel.96232526"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:15.1070757,
                          longitude:-88.0828927
                          }}
              title="Nahun Andrade"
              description="CORTES, EL LANILLAL/cel.99069234"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:15.1030775,
                          longitude:-88.0754559
                          }}
              title="(Desconosido)"
              description="CORTES, EL CEDRITO"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:15.102623,
                          longitude:-88.0760345
                          }}
              title="Toribio Sanchez Sanchez"
              description="CORTES, LA PROVIDENCIA"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:15.1020865,
                          longitude:-88.0764306
                          }}
              title="Vicente Leiva Rivera"
              description="CORTES, EL LANILLAL"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:14.02957269,
                          longitude:-86.35130772
                          }}
              title="Álvaro Rony Aguilera Flores"
              description="EL PARAÍSO, DESVÍO EL ZAPOTILLO/cel.94456061"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:13.89207816,
                          longitude:-86.5584435
                          }}
              title="Arnold Antonio Aguilar torres"
              description="EL PARAÍSO, LOS TERRONES/cel.94534956"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:13.88909056,
                          longitude:-86.78445644
                          }}
              title="Bayron Espinoza mendoza"
              description="EL PARAÍSO, OROPOLÍ/cel.89820905"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />

            <Marker coordinate={{latitude:14.219211,
                          longitude:-86.7808904
                          }}
              title="Cristobal Roberto Bellorin Rodriguez"
              description="EL PARAÍSO, EL CANTÓN/cel.32872903"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />

            <Marker coordinate={{latitude:14.0795948,
                          longitude:-86.376307
                          }}
              title="Darwin Alex Gomez Vallecillo"
              description="EL PARAÍSO, QUEBRADA LARGA/cel.99482153"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />

            <Marker coordinate={{latitude:14.03306474,
                          longitude:-86.8781677
                          }}
              title="Delmer Manuel Trujillo"
              description="EL PARAÍSO, EL EMPALME/cel.97982424"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:13.98007159,
                          longitude:-86.39234389
                          }}
              title="Douglas Lizandro Galeas Mendoza"
              description="EL PARAÍSO, EL HIGUERAL/cel.97118250"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:13.90141393,
                          longitude:-86.57081117
                          }}
              title="Eli Misael  Rodriguez López"
              description="EL PARAÍSO, LOS TERRONES/cel.33330067"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
              
            <Marker coordinate={{latitude:13.90141393,
                          longitude:-86.57081117
                          }}
              title="Eli Misael  Rodriguez López"
              description="EL PARAÍSO, LOS TERRONES/cel.33330067"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:13.977927,
                          longitude:-86.39434155
                          }}
              title="Exaltación Cruz Lainez"
              description="EL PARAÍSO, EL HIGUERAL/cel.94474501"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:13.977927,
                          longitude:-86.39434155
                          }}
              title="Freven Samuel Núñez sosa"
              description="EL PARAÍSO, DANLI/cel.94474501"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:14.02661233,
                          longitude:-86.38821924
                          }}
              title="Gerardo Antonio Rodríguez Pavon"
              description="EL PARAÍSO, CHIRINOS/cel.97292504"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:13.9490269,
                          longitude:-86.9067624
                          }}
              title="Gil Antonio Obando Alvarenga"
              description="EL PARAÍSO, EL OCOTAL/cel.97224662"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:14.02572963,
                          longitude:-86.42357459
                          }}
              title="Héctor Arnold Zelaya Irias"
              description="EL PARAÍSO, EL BENQUE/cel.32781295"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:14.03945067,
                          longitude:-86.43101901
                          }}
              title="Jesús Castellanos"
              description="EL PARAÍSO, EL BENQUE/cel.97570926"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:13.96865724,
                          longitude:-86.5132476
                          }}
              title="Jorge Alberto Donaire Sosa"
              description="EL PARAÍSO, ARAULÍ/cel.33804121"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:14.37601381,
                          longitude:-86.70243264
                          }}
              title="Jose Catalino martinez"
              description="EL PARAÍSO, EL RIÍTO DEL ESQUILLAL/cel.98896302"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:14.2106,
                          longitude:-86.3647364
                          }}
              title="Jose Demetrio Flores"
              description="EL PARAÍSO, EL OCOTILLO/cel.95350326"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:13.9567356,
                          longitude:-86.5702641
                          }}
              title="Jose Fernando Sosa"
              description="EL PARAÍSO, EL PACÓN/cel.99228549"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:14.0257038,
                          longitude:-86.423552
                          }}
              title="Jose Luis Zuniga"
              description="EL PARAÍSO, EL BENQUE/cel.32781295"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:14.2628643,
                          longitude:-86.6418775
                          }}
              title="Jose Santos Martinez Amaya"
              description="EL PARAÍSO, EL RODEO/cel.98044706"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:14.262872,
                          longitude:-86.6419106
                          }}
              title="Juan Bautista Pineda Garay"
              description="EL PARAÍSO, POTRERILLOS/cel.96269333"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
            <Marker coordinate={{latitude:14.02358097,
                          longitude:-86.37669437
                          }}
              title="Julio Armando Duarte Nuñez"
              description="EL PARAÍSO, CHIRINOS/cel.99360071"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
      <Marker coordinate={{latitude:14.2628455,
                          longitude:-86.6418731
                          }}
              title="Lorenzo Amaya"
              description="EL PARAÍSO, EL RODEO/cel.97363355"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
              />
      <Marker coordinate={{latitude:14.00003033,
                          longitude:-86.41455971
                          }}
              title="Luis Humberto Sauceda"
              description="EL PARAÍSO, EL OBRAJE/cel.98814897"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.89196407,
                          longitude:-86.55846032
                          }}
              title="Marlon Arturo Cáceres Sauceda"
              description="EL PARAÍSO, LOS TERRONES/cel.96702292"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.18036901,
                          longitude:-86.72701467
                          }}
              title="Martin Cerrato Varela"
              description="EL PARAÍSO, TEUPASENTI/cel.99061559"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.98277755,
                          longitude:-86.34042125
                          }}
              title="Marvin Edgardo Turcios Guevara"
              description="EL PARAÍSO, ESCUAPA/cel.97805092"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
       <Marker coordinate={{latitude:14.53566212,
                          longitude:-86.7932763
                          }}
              title="Nahun Edgardo Cerrato Mondragon"
              description="EL PARAÍSO, LOS TERRONES/cel.98723078"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.93027928,
                          longitude:-86.54365583
                          }}
              title="Néstor Joaquín Gonzales Sosa"
              description="EL PARAÍSO, DESVIO LOS TERRONES/cel.33397000"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.9558367,
                          longitude:-86.8982089
                          }}
              title="Norlan Nolberto Obando"
              description="EL PARAÍSO, EL OCOTAL/cel.96936525"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.8610089,
                          longitude:-86.6116695
                          }}
              title="Pedro Arturo Hernandez Ardón"
              description="EL PARAÍSO, EL SILLÓN/cel.88823307"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.2628716,
                          longitude:-86.6418827
                          }}
              title="Prudencio de Jusus Zambrano Carballo"
              description="EL PARAÍSO, EL RODEO/cel.94638408"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.2586783,
                          longitude:-86.6410316
                          }}
              title="Raúl Murillo Robledo"
              description="EL PARAÍSO, EL RODEO/cel.95670979"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.8498533,
                          longitude:-86.5897999
                          }}
              title="Reinieri Rodríguez"
              description="EL PARAÍSO, LOS LLANOS/cel.99399901"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.90786175,
                          longitude:-86.54534049
                          }}
              title="René Midence"
              description="EL PARAÍSO, HDA. RANCHO ALEGRE/cel.98326845"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.2628791,
                          longitude:-86.6419142
                          }}
              title="Ricxi Candelaria Murillo"
              description="EL PARAÍSO, EL RODEO/cel.97906871"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.95669838,
                          longitude:-86.57048567
                          }}
              title="Rosny Francisco Amaya Alvarado"
              description="EL PARAÍSO, LOS TERRONES/cel.99273530"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.86906164,
                          longitude:-86.45855981
                          }}
              title="Santos Horacio Vallejo Lovo"
              description="EL PARAÍSO, EL BIJAO/cel.95421000"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.2628702,
                          longitude:-86.641749
                          }}
              title="Santos Pablo Pineda Amaya"
              description="EL PARAÍSO, EL RODEO/cel.94638408"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.02598095,
                          longitude:-86.39916573
                          }}
              title="Santos Virgilio Gaytán"
              description="EL PARAÍSO, EL OBRAJE/cel.89649635"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.0129311,
                          longitude:-86.41645391
                          }}
              title="Secundino Betanco"
              description="EL PARAÍSO, EL OBRAJE/cel.96372691"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.2627426,
                          longitude:-86.641641
                          }}
              title="Selvin Omar Amaya Martinez"
              description="EL PARAÍSO, EL RODEO/cel.96136108"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.9420549,
                          longitude:-86.5618415
                          }}
              title="Víctor Manuel Gonzales"
              description="EL PARAÍSO, EL PESCADERO/cel.99825282"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:13.9072256,
                          longitude:-86.543858
                          }}
              title="Willy Smith Nuñez Vallecillo"
              description="EL PARAÍSO, CUYALÍ/cel.96111625"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.01523439,
                          longitude:-86.6603348
                          }}
              title="Wilmer Arturo Gonzales Rodríguez"
              description="EL PARAÍSO, JACALEAPA/cel.95963512"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.81584626,
                          longitude:-86.9386418
                          }}
              title="Armando Izaguirre Matute"
              description="FRANCISCO MORAZÁN, SAN FRANCISCO DE ORICA/cel.96679638"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.2498383,
                          longitude:-87.02900438
                          }}
              title="Beken Joel Reyes Alonzo"
              description="FRANCISCO MORAZÁN, SAN ANTONIO DE ORIENTE/cel.97502683"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.81400283,
                          longitude:-86.94204234
                          }}
              title="Cesar Lopez Lopez"
              description="FRANCISCO MORAZÁN, SAN FRANCISCO DE ORICA/cel.96489748"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.47064814,
                          longitude:-87.15176216
                          }}
              title="Cristian Hernan Martinez Ponse"
              description="FRANCISCO MORAZÁN, EL ESPINO/cel.99098914"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.81930275,
                          longitude:-86.93815489
                          }}
              title="Desconocido"
              description="FRANCISCO MORAZÁN, SAN FRANCISCO DE ORICA/cel.--------"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.8289258,
                          longitude:-87.00465507
                          }}
              title="Filadelfo Posadas"
              description="FRANCISCO MORAZÁN, MIRALDA/cel.99044567"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.5670796,
                          longitude:-86.7839232
                          }}
              title="Karla Cesilia Oseguera"
              description="FRANCISCO MORAZÁN, SANQUÍN/cel.97191652"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.20070751,
                          longitude:-87.01589131
                          }}
              title="Manuel De Jesús Izaguirre"
              description="FRANCISCO MORAZÁN, CHIQUISTEPE/cel.99571003"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.53110865,
                          longitude:-86.79330572
                          }}
              title="Marcos Antonio Sanchez"
              description="FRANCISCO MORAZÁN, LA PEÑITA/cel.98883186"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.81925967,
                          longitude:-86.9293409
                          }}
              title="Mario Orlando Mayen Ruiz"
              description="FRANCISCO MORAZÁN, SAN FRANCISCO DE ORICA/cel.97953274"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.54886458,
                          longitude:-86.81408035
                          }}
              title="Melvin Arturo Zelaya Zuniga"
              description="FRANCISCO MORAZÁN, GUAIMACA/cel.99482153"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.71691998,
                          longitude:-86.93463014
                          }}
              title="Victor Pagoaga Hernandez"
              description="FRANCISCO MORAZÁN, ORICA/cel.97318059"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.17948348,
                          longitude:-88.01228164
                          }}
              title="Getzel Eduardo Urquía santos"
              description="LA PAZ, MARCALA/cel.96998877"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.72866739,
                          longitude:-86.09561848
                          }}
              title="Angel Fernando Ruiz Cruz"
              description="OLANCHO, JUTIQUILE/cel.95696316"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.53581488,
                          longitude:-86.59653157
                          }}
              title="Angel Javier Banegas Chavez"
              description="OLANCHO, EL TABLÓN DEL LEÓN/cel.95428291"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.59110221,
                          longitude:-86.45186839
                          }}
              title="Angen Adolfo Murillo Melgar"
              description="OLANCHO, LAS MINAS/cel.95622229"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.70998597,
                          longitude:-86.13783007
                          }}
              title="Arturo Jose Lanza Diaz"
              description="OLANCHO, TELICA/cel.95702254"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:15.19376464,
                          longitude:-85.4401297
                          }}
              title="Asdrubal Mendoza Hernández"
              description="OLANCHO, MARAÑONES/cel.99234041"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.79445037,
                          longitude:-86.13613199
                          }}
              title="Betulio Antonio Padilla Ocampo"
              description="OLANCHO, GUACOCA/cel.32823870"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.86319827,
                          longitude:-85.81991924
                          }}
              title="Byron Eduardo Escobar Flores"
              description="OLANCHO, EL GUALIQUEME/cel.96946381"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.67316595,
                          longitude:-86.15851992
                          }}
              title="Carlos Ovidio Erazo Rivera"
              description="OLANCHO, LA EMPALIZADA/cel.89436470"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.55272554,
                          longitude:-86.33693808
                          }}
              title="Carmen Elizabeth Colindres Zelaya"
              description="OLANCHO, LAS LLAVES/cel.95211187"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.79445891,
                          longitude:-86.13615143
                          }}
              title="Edgar Efrain Villeda Rivera"
              description="OLANCHO, GUACOCA/cel.96424689"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.5325034,
                          longitude:-86.59506692
                          }}
              title="Elmer Saturnino Bonilla Valladares"
              description="OLANCHO, EL TABLÓN DEL LEÓN/cel.98713381"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />   
      <Marker coordinate={{latitude:14.68104812,
                          longitude:-86.1485429
                          }}
              title="Francisca Lorena Bustillo"
              description="OLANCHO, LA EMPALIZADA/cel.33460271"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.77361652,
                          longitude:-85.76095984
                          }}
              title="Gerardo Alfredo Hernandez Moya"
              description="OLANCHO, CONCEPCIÓN DE RÍO TINTO/cel.95863953"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.91868325,
                          longitude:-85.77079047
                          }}
              title="Gilberto Guifarro Montes de Oca"
              description="OLANCHO, HACIENDA EL URRACAL/cel.96473553"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.7312486,
                          longitude:-85.9715859
                          }}
              title="Hector Antonio Mejia Mejia"
              description="OLANCHO, EL GUAYAPE/cel.88463498"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.7476901,
                          longitude:-86.0769851
                          }}
              title="Hector Geovanny Santos"
              description="OLANCHO, EL CORTÉS/cel.98224904"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.88443,
                          longitude:-85.82393333
                          }}
              title="Héctor Rolando Ortega Escobar"
              description="OLANCHO, LA COLONIA AGRÍCOLA/cel.96948666"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.6593544,
                          longitude:-86.1467535
                          }}
              title="Henry Bernardo Alvarado"
              description="OLANCHO, LA EMPALIZADA/cel.89610866"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:15.19344844,
                          longitude:-85.43795055
                          }}
              title="Hernan Mendoza Hernandez"
              description="OLANCHO, MARAÑONES/cel.94407332"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.72300919,
                          longitude:-85.93066043
                          }}
              title="Irma Esperanza Turcios"
              description="OLANCHO, SAN CARLOS DE LAS FLORES/cel.99833680"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.53809753,
                          longitude:-86.60367035
                          }}
              title="Javier Eduardo Erazo Solis"
              description="OLANCHO, LA LIMA/cel.95412768"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />  
      <Marker coordinate={{latitude:14.88540223,
                          longitude:-86.20003503
                          }}
              title="Jorge Alfredo Miralda Munguia"
              description="OLANCHO, REGADÍO/cel.99019704"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.77124318,
                          longitude:-85.76824397
                          }}
              title="Jorge Daniel Bonilla Hernandez"
              description="OLANCHO, LAS PIÑUELAS/cel.95515051"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:15.01413778,
                          longitude:-86.13818486
                          }}
              title="José Adán Baquedano"
              description="OLANCHO, LAS JOYAS NO.1/cel.96020295"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.80843667,
                          longitude:-85.738675
                          }}
              title="José Antonio Suazo Martínez"
              description="OLANCHO, LAGUNAS DEL HUYASTE/cel.99064360"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.9824419,
                          longitude:-85.7176318
                          }}
              title="Jose Efrain Sanclair Gutierrez"
              description="OLANCHO, VALLECITO DE RÍO TINTO/cel.99602188"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.53971301,
                          longitude:-86.59286507
                          }}
              title="Jose Ricardo Barahona Reyes"
              description="OLANCHO, LAGUNITA/cel.97218852"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.73352901,
                          longitude:-86.66010388
                          }}
              title="José Ricardo Gradis Cardona"
              description="OLANCHO, JUTIAPA/cel.98329410"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.85811,
                          longitude:-85.84793833
                          }}
              title="José Rolando Hernández"
              description="OLANCHO, NUEVA ESPERANZA/cel.99740790"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.7724898,
                          longitude:-86.17026
                          }}
              title="Juan Blas Sauceda Santos"
              description="OLANCHO, EL NANCE/cel.87904250"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.8258585,
                          longitude:-86.2271998
                          }}
              title="Juan Carlos Aguriano"
              description="OLANCHO, TILAPA/cel.96876507"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.8773183,
                          longitude:-86.16208281
                          }}
              title="Juan Ramón Meza Padilla"
              description="OLANCHO, POTRERO DE CASAS/cel.95040615"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.87647209,
                          longitude:-86.1537017
                          }}
              title="Julio César Padilla"
              description="OLANCHO, POTRERO DE CASAS/cel.97287978"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.59474955,
                          longitude:-86.43780992
                          }}
              title="Junior Ubence Argueta Avelar"
              description="OLANCHO,EL BARROSO/cel.32242333"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.907876,
                          longitude:-86.88685446
                          }}
              title="Justiniano Flores Ruiz"
              description="OLANCHO,EL COYOL/cel.95726631"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.73299693,
                          longitude:-86.65947167
                          }}
              title="Lincoln Leonardo Gradis Del Arca"
              description="OLANCHO,JUTIAPA/cel.95093543"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.68074394,
                          longitude:-86.14816764
                          }}
              title="Luis Alonso Castro Andrade"
              description="OLANCHO,LA EMPALIZADA/cel.95674197"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.7002036,
                          longitude:-86.1175349
                          }}
              title="Luis Fernando Gómez Amador"
              description="OLANCHO, PUZUNCA O SAN AGUSTÍN/cel.99701536"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.77013833,
                          longitude:-85.76379
                          }}
              title="Marbin Alexis Bonilla Barahona"
              description="OLANCHO, LAS PIÑUELAS/cel.99341000"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:15.11559479,
                          longitude:-85.565927
                          }}
              title="Margarito Zuniga Acosta"
              description="OLANCHO, EL NARANJO/cel.96569534"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.68073912,
                          longitude:-86.14829161
                          }}
              title="Miguel Angel Rodriguez Zelaya"
              description="OLANCHO, LA EMPALIZADA/cel.89426701"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.88382195,
                          longitude:-85.82431085
                          }}
              title="Moises Escobar Hernandez"
              description="OLANCHO, LA COLONIA AGRÍCOLA/cel.97086420"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:15.0242287,
                          longitude:-86.16076321
                          }}
              title="Narciso Galileo Colindres Reyes"
              description="OLANCHO, LA BOCA/cel.32421278"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.80744801,
                          longitude:-86.49389981
                          }}
              title="Olman Abad Díaz Martínez"
              description="OLANCHO, PARUMBLE NUEVO/cel.97863441"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.75986443,
                          longitude:-85.91696264
                          }}
              title="Omar Edgardo Madrid Matute"
              description="OLANCHO, EL GUAYABITO/cel.94671361"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:15.02080194,
                          longitude:-86.69207269
                          }}
              title="Oscar Ramon Flores Menocal"
              description="OLANCHO, LOS ENCUENTROS/cel.96498924"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:15.03816157,
                          longitude:-86.68874578
                          }}
              title="Oscar Ramon Flores Menocal"
              description="OLANCHO, LOS ENCUENTROS/cel.96498924"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.87688349,
                          longitude:-86.16231236
                          }}
              title="Oscar Rene Padilla Galeas"
              description="OLANCHO, POTRERO DE CASAS/cel.95040615"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.88310684,
                          longitude:-85.82371883
                          }}
              title="Osman David Maradiaga"
              description="OLANCHO, JAMASQUIRE/cel.97602873"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.89171179,
                          longitude:-85.81306779
                          }}
              title="Osman David Maradiaga Mejia"
              description="OLANCHO, CATACAMAS/cel.97602873"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:15.11565843,
                          longitude:-85.56635854
                          }}
              title="Otoniel Zuniga Mendoza"
              description="OLANCHO, VALLECITO/cel.98150816"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.89055685,
                          longitude:-85.82744963
                          }}
              title="Ramon Hostilio Rodriguez Hernandez"
              description="OLANCHO, JAMASQUIRE/cel.88121214"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.68072131,
                          longitude:-86.14819581
                          }}
              title="Reina Natalia Andrade Barralaga"
              description="OLANCHO, LA EMPALIZADA/cel.95674197"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.87590379,
                          longitude:-86.31051553
                          }}
              title="Rigoberto Varela Sevilla"
              description="OLANCHO, TRINIDAD/cel.97975702"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.43225814,
                          longitude:-86.10024297
                          }}
              title="Rogelio Turcios Diaz"
              description="OLANCHO, AZACUALPA/cel.98294557"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.73309466,
                          longitude:-86.65952457
                          }}
              title="Ronaldo Elías Gradis Cardona"
              description="OLANCHO, JUTIAPA/cel.98868236"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.97490992,
                          longitude:-85.72547418
                          }}
              title="Rony Antonio Cortes"
              description="OLANCHO, VALLECITO DE RÍO TINTO/cel.98707148"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.89835714,
                          longitude:-85.83077419
                          }}
              title="Russell Besanoc carbajal Cruz"
              description="OLANCHO, JAMASQUIRE/cel.97415252"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.64694559,
                          longitude:-86.15207143
                          }}
              title="Samuel Edgardo Avila Martinez"
              description="OLANCHO, LA EMPALIZADA/cel.88334405"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      /> 
      <Marker coordinate={{latitude:14.54521431,
                          longitude:-86.59223048
                          }}
              title="Santos Gabriel Valladares Sevilla"
              description="OLANCHO, LA LIMA/cel.96350735"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.89555871,
                          longitude:-86.33576302
                          }}
              title="Tulio Saul Valdez Ruiz"
              description="OLANCHO, SAN JOSÉ/cel.96786487"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:15.092312,
                          longitude:-88.4849869
                          }}
              title="Alan Perdomo"
              description="SANTA BARBARA, LAGUNITAS ( JARDINES )/cel.--------"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.82813343,
                          longitude:-88.17485347
                          }}
              title="Angela Pineda Castellanos"
              description="SANTA BARBARA, CEGUACA/cel.94755160"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />
      <Marker coordinate={{latitude:14.8369686,
                          longitude:-88.3367404
                          }}
              title="Arnold Rodriguez Leiva"
              description="SANTA BARBARA, LA CUCHILLA/cel.--------"
              icon={require("../../../assets/imagenes/icono-semillas.png")}
      />                           
    </MapView>
  </>
 ) ;  
}

const styles = StyleSheet.create({
  row: {
      flex:1,
      flexDirection: "column",
    },
  fondo:{
      flex:1,
      backgroundColor:'#F1F1F5',
   },
   contenedorNavegacion: {
      backgroundColor:"#9FA617",
      alignItems:"flex-start",
      flexDirection:"row",
      height:"15%"
    },
  tamañoFlecha:{
      marginLeft:"20%",
      width:"60%",
      height:"30%",
      marginTop: "80%"
  },
  flecha:{
      marginLeft:"1%",
      width:"20%",
      height:"100%",
  },
  titulo:{
      fontFamily:"PublicSans_BoldItalic",
      fontSize: 20,
      alignItems:"center",
      justifyContent:"center"
  },
  contenedortitulo:{
      marginLeft:"5%",
      marginTop:"5%",
      width:"90%",
      height:"5%",
      alignItems:"center"
  },
  lineStyle:{
    borderWidth: 0.5,
    width:"90%",
    marginLeft:"3%",
    marginRight:"3%", 
    borderColor:'#808080', 
    margin:1,
  }
  })

export default PantallaSemilla