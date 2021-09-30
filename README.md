#Front-end instructies F.C.

Dit bestand bevat instructies en voorbeelden voor het gebruik van de Front-end van de F.C. applicatie.
Zorg ervoor dat je de gehele installatiehandleiding hebt gelezen voordat je begint te werken in dit project.

**Link naar de Github Repository:** https://github.com/Roy812/fitness-classes_react-v1 

##Inhoud
* [Home-page](#Home-page)
* [Register-page](#Register-page)
* [Login-page](#Login-page)
* [Footer](#Footer)  
* [Settings-page](#Settings-page)
* [About-page](#About-page)
* [Newsletter-page](#Newsletter-page)
* [Categories-page](#Categories-page)
* [Nutrition-page](#Nutrition-page)
* [CICO-page](#CICO-page)
* [CICOPay-page](#CICOPay-page)
* [Review-page](#Review-page)
* [ReviewNutrition-page](#ReviewNutrition-page)
* [ReviewCICO-page](#ReviewCICO-page)
* [CreateReview-page](#CreatReview-page)
* [MyClasses-page](#MyClasses-page)

##Home-page
###Inloggen
De gebruiker kan inloggen met zijn **_'username'_** en **_'password'_**. Zie onderstaand voorbeeld:

![img.png](src/assets/img.png)

**Toelichting**
Beide velden moeten gevuld zijn, en de username dient een '@' teken te bevatten.
Naast deze foutmeldingen zal de gebruiker ook een bericht krijgen wanneer de inlog gegevens niet overeenkomen met de gegevens in de database.

###Register-button
Deze button zal de gebruiker navigeren naar de 'Register-page'. Zie onderstaand voorbeeld:

![img_1.png](src/assets/img_1.png)

##Register-page
De gebruiker kan op deze een account aanmaken met de volgende voorwaarden:
* Beide velden dienen ingevuld te zijn.
* De 'username' is een mailadres en bevat het '@' teken.
* De 'username' mag maximaal 50 tekens bevatten.  
* Het 'wachtwoord' moet minimaal 6 tekens lang zijn.

Zie onderstaand voorbeeld:

![img_2.png](src/assets/img_2.png)

##Login-page
De gebruiker(die is ingelogd) vindt op deze pagina twee navigatie buttons:
* De eerste button gaat de 'Newsletter-page'
* De tweede button gaat de 'Categories-page'

##Footer (Logout/Settings)
De ingelogde gebruiker zal in de 'Footer' van de pagina een button vinden waarmij hij kan uitloggen.
Zie onderstaand voorbeeld:

![img_3.png](src/assets/img_3.png)

**NB: Wanneer de gebruiker uitlogt wordt zijn localstorage leeggehaald, en hij wordt doorgewezen naar de home-page.**

In dezelfde footer zal ook een Link naar de 'Settings-page'.
Zie onderstaand voorbeeld:

![img_4.png](src/assets/img_4.png)

##Settings-page
Hier vindt de gebruiker verschillende functies ten aanzien van zijn account.
Zie onderstaand voorbeeld:

![img_5.png](src/assets/img_5.png)

**De volgende voorwaarden zijn nog van belang:**
* Het wachtwoord moet minimaal 6 tekens lang zijn.
* Om de functies 'ChangePassword' en 'UploadProfilePicture' te kunnen gebruiken moeten beide velden eerst gevuld te worden.
* Het bestand dat geüpload wordt als 'profilePicture' dient .jpg, .png of .pdf te zijn.

##About-page

Op deze pagina vind de gebruiker achtergrond informatie over de dienst die F.C. levert.

##Newsletter-page

Op deze pagina vind de gebruiker Links naar verschillende nieuwsbrieven.

##Categories-page
Op deze pagina vindt de gebruiker verschillende links naar categorieën van classes.

##Nutrition-page
Op deze pagina vindt de gebruiker verschillende links naar titels van classes over het onderwerp 'Nutrition'.

##CICO-page
Op deze pagina vindt de gebruiker een link naar de 'CICOPay-page'
Ook vindt de gebruiker twee button voor het downloaden van een 'preview' en een 'guide'.
Zie onderstaand voorbeeld:

![img_6.png](src/assets/img_6.png)

**NB: Alle lessen uit de categorie 'Nutrition' zijn te boeken door de gebruiker.**

##CICOPay-page
Hier kan de gebruiker Coins inwisselen om aan 'class booking' te doen.
Zie onderstaand voorbeeld:

![img_7.png](src/assets/img_7.png)

Als de betaling successvol is zal een button verschijnen waarmee de gebruiker zijn 'booking' kan bevestigen.
Zie onderstaand voorbeeld:

![img_8.png](src/assets/img_8.png)

Als de 'booking' geslaagd is zal hierover een melding in beeld verschijnen.

**NB: Als de gebruiker niet genoeg Coins ter beschikking heeft zal hierover een foutmelding verschijnen!**

##Review-page
Op deze pagina vindt de gebruiker een link voor het aanmaken van een 'review' (de groene button 'CreateReview').
Ook kan de gebruiken klikken op links voor reviews uit verschillende categorieën.

##ReviewNutrition-page
Op deze pagina vindt de gebruiker verschillende links naar reviews van classes over het onderwerp 'Nutrition''.

##ReviewCICO-page
Op deze pagina vindt de gebruiker een button 'Get Reviews' om de 'reviews' te bekijken van 'CICO'.
Zie onderstaand voorbeeld:

![img_9.png](src/assets/img_9.png)

**NB: Het is mogelijk om reviews te bekijken over alle lessen uit de categorie 'Nutrition'.**

**NB: Als het niet lukt om de gegevens op te halen verschijnt een foutmelding in beeld!**

##CreateReview-page
Op deze pagina kan de gebruiker een review aanmaken en versturen met de button 'post'.
De volgende voorwaarden zijn van belang:
* Selecteer in de bovenste dropdown menu om welke class het gaat.
* De tekst van de review mag maximaal 250 tekens bevatten, en mag niet leeg zijn.
* Selecteer in de onderste dropdown menu een 'rating' van 1-5.
Zie onderstaand voorbeeld:

![img_10.png](src/assets/img_10.png)

##MyClasses-page
Op deze pagina vindt de gebruiker een button 'Get My Bookings'.
Hiermee kan de gebruiker zijn 'bookings' bekijken.
Zie het onderstaand voorbeeld:

![img_11.png](src/assets/img_11.png)

**NB: Als het niet lukt om de gegevens op te halen verschijnt een foutmelding in beeld!**
