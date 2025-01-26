import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 8080;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL = "http://api.weatherapi.com/v1/current.json?key=3bb756b21a98411a84184852241010&q="
var content = [];
var extraContent = [];
var city = [];
var gender = [];
app.get("/", (req, res) => {
    let dayCheck = undefined;
    res.render("index.ejs", { content,extraContent,city,gender,dayCheck });
    
});

app.get("/results",async (req,res)=>{
    return res.status(400).json({error:"Requested URL does not exist"})
})

app.post("/results", async (req, res) => {
    try{
    const city = req.body.place;
    const gender = req.body.gender;
    const result = await axios.get(API_URL + `${city}`);
    if(result.status != 200)
    {
        throw new Error("Failed to fetch weather data")
    }
    console.log(result.status);
    const temperature = result.data.current.temp_c;
    const day = result.data.current.is_day;
    const rainfall = result.data.current.precip_mm;
    const humidity = result.data.current.humidity;
    const uv = result.data.current.uv;
    const dayCheck = result.data.current.is_day;

    console.log(city);
    console.log(gender);
    console.log(temperature);
    console.log(day);
    console.log(rainfall);
    console.log(humidity);
    console.log(uv);

    let outfit = [];
    let extra = [];
    if (gender == "male") {
        if (temperature >= 30) {
            if (rainfall <= 0.5) {
                if (humidity >= 60) {
                    outfit = MalehighTempNoRainHighHumidity[Math.floor(Math.random() * MalehighTempNoRainHighHumidity.length)];
                }
                else if (humidity >= 40 && humidity < 60) {
                    outfit = MalehightempNoRainMediumHumidity[Math.floor(Math.random() * MalehightempNoRainMediumHumidity.length)];
                }
                else if (humidity < 40) {
                    outfit = MalehighTempNoRainLowHumidity[Math.floor(Math.random() * MalehighTempNoRainLowHumidity.length)];
                }
            }
            else if (rainfall > 0.5) {
                if (humidity >= 60) {
                    outfit = MalehighTempRainHighHumidity[Math.floor(Math.random() * MalehighTempRainHighHumidity.length)];
                }
                else if (humidity >= 40 && humidity < 60) {
                    outfit = MalehighTempRainMeduimHumidity[Math.floor(Math.random() * MalehighTempRainMeduimHumidity.length)];
                }
                else if (humidity < 40) {
                    outfit = MalehighTempRainLowHumidity[Math.floor(Math.random() * MalehighTempRainLowHumidity.length)];
                }
            }
        }
        else if(temperature >=20 && temperature < 30)
        {
            if(rainfall <= 0.5)
            {
                if(humidity >= 60)
                {
                    outfit = MalemediumTempNoRainHighHumidity[Math.floor(Math.random() * MalemediumTempNoRainHighHumidity.length)];
                }
                else if(humidity >= 40 && humidity < 60)
                {
                    outfit = MalemediumtempNoRainMediumHumidity[Math.floor(Math.random() * MalemediumtempNoRainMediumHumidity.length)];
                }
                else if(humidity < 40)
                {
                    outfit = MalemediumTempNoRainLowHumidity[Math.floor(Math.random() * MalemediumTempNoRainLowHumidity.length)];
                }
            }
            else if(rainfall > 0.5)
            {
                if(humidity >= 60)
                {
                    outfit = MalemediumTempRainHighHumidity[Math.floor(Math.random() * MalemediumTempRainHighHumidity.length)];
                }
                else if(humidity >= 40 && humidity < 60)
                {
                    outfit = MalemediumTempRainMeduimHumidity[Math.floor(Math.random() * MalemediumTempRainMeduimHumidity.length)];
                }
                else if(humidity < 40)
                {
                    outfit = MalemediumTempRainLowHumidity[Math.floor(Math.random() * MalemediumTempRainLowHumidity.length)];
                }
            }
        }
        else if(temperature >=0 && temperature < 20)
        {
            if(rainfall <=0.5)
            {
                outfit = MalelowTempNoRain[Math.floor(Math.random() * MalelowTempNoRain.length)];
            }
            else if(rainfall > 0.5)
            {
                outfit = MalelowTempRain[Math.floor(Math.random() * MalelowTempRain.length)];
            }
        }
        else if(temperature < 0)
        {
            if(rainfall <= 0.5)
            {
                outfit = MaleminusTempNoRain[Math.floor(Math.random() * MaleminusTempNoRain.length)];
            }
            else if(rainfall > 0.5)
            {
                outfit = MaleminusTempRain[Math.floor(Math.random() * MaleminusTempRain.length)];
            }
        }

    }

    if(gender == "female")
    {
        if(temperature >= 30)
        {
            if(rainfall <= 0.5)
            {
                if(humidity >= 60)
                {
                    outfit = FemalehighTempNoRainHighHumidity[Math.floor(Math.random() * FemalehighTempNoRainHighHumidity.length)];
                }
                else if(humidity >= 40 && humidity < 60)
                {
                    outfit = FemalehighTempNoRainMediumHumidity[Math.floor(Math.random() * FemalehighTempNoRainMediumHumidity.length)];
                }
                else if(humidity < 40)
                {
                    outfit = FemalehighTempNoRainLowHumidity[Math.floor(Math.random() * FemalehighTempNoRainLowHumidity.length)];
                }
            }
            else if(rainfall > 0.5)
            {
                if(humidity >= 60)
                {
                    outfit = FemalehighTempRainHighHumidity[Math.floor(Math.random() * FemalehighTempRainHighHumidity.length)];
                }
                else if(humidity >= 40 && humidity < 60)
                {
                    outfit = FemalehighTempRainMediumHumidity[Math.floor(Math.random() * FemalehighTempRainHighHumidity.length)];
                }
                else if(humidity < 40)
                {
                    outfit = FemalehighTempRainLowHumidity[Math.floor(Math.random() * FemalehighTempRainLowHumidity.length)];
                }
            }
        }
        else if(temperature >=20 && temperature < 30)
        {
            if(rainfall <= 0.5)
            {
                if(humidity >= 60)
                {
                    outfit = FemalemediumTempNoRainHighHumidity[Math.floor(Math.random() * FemalemediumTempNoRainHighHumidity.length)];
                }
                else if(humidity >= 40 && humidity < 60)
                {
                    outfit = FemalemediumTempNoRainMediumHumidity[Math.floor(Math.random() * FemalemediumTempNoRainMediumHumidity.length)];
                }
                else if(humidity < 40)
                {
                    outfit = FemalemediumTempNoRainLowHumidity[Math.floor(Math.random() * FemalemediumTempNoRainLowHumidity.length)];
                }
            }
            else if(rainfall > 0.5)
            {
                if(humidity >= 60)
                {
                    outfit = FemalemediumTempRainHighHumidity[Math.floor(Math.random() * FemalemediumTempRainHighHumidity.length)];
                }
                else if(humidity >= 40 && humidity < 60)
                {
                    outfit = FemalemediumTempRainMediumHumidity[Math.floor(Math.random() * FemalemediumTempRainMediumHumidity.length)];
                }
                else if(humidity < 40)
                {
                    outfit = FemalemediumTempRainLowHumidity[Math.floor(Math.random() * FemalemediumTempRainLowHumidity.length)];
                }
            }
        }
        else if(temperature >=0 && temperature < 20)
        {
            if(rainfall <= 0.5)
            {
                outfit = FemalelowTempNoRain[Math.floor(Math.random() * FemalelowTempNoRain.length)];
            }
            else if(rainfall > 0.5)
            {
                outfit = FemalelowTempRain[Math.floor(Math.random() * FemalelowTempRain.length)];
            }
        }
        else if(temperature < 0)
        {
            if(rainfall <= 0.5)
            {
                outfit = FemaleminusTempNoRain[Math.floor(Math.random() * FemaleminusTempNoRain.length)];
            }
            else if(rainfall > 0.5)
            {
                outfit = FemaleminusTempRain[Math.floor(Math.random() * FemaleminusTempRain.length)];
            }
        }
    }
    
    
        if(uv >=0 && uv <=2)
        {
            extra = ["No SunScreen"];
        }
        if(uv >= 3 && uv <= 7)
        {
            extra = ["SPF 30+ SunScreen"];
        }
        if(uv >= 8)
        {
            extra = ["SPF 50+ SunScreen"];
        }
   
        

    res.render("index.ejs",{
        content : outfit,
        extraContent : extra,
        city : city,
        gender : gender,
        dayCheck : dayCheck,
    });
    } catch(error){
        console.log(error.response.data);
        res.render("error.ejs");
    }
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





const MalehighTempNoRainHighHumidity = [["Linen Shirt", "Chino Shorts", "Canvas Sneakers", "Cap", "Sunglasses(Day Only)"], ["Cotton T-Shirt", "Linen Trousers", "Leather Sandals", "Wide Hat", "Wristwatch"], ["Polo T-Shirt", "Cotton Shorts", "Loafers", "Sunglasses(Day Only)", "Nylon Jacket"], ["Button Down T-Shirt", "Chino Shorts", "Sneakers", "Baseball Cap", "Bracelet"], ["Cotton T-Shirt", "Linen Pants", "Flip Flops", "Straw Hat", "Cotton Scarf"]];
const MalehightempNoRainMediumHumidity = [["Linen Shirt", "Cotton Shorts", "Loafers", "Sunglasses(Day Only)", "Straw Hat"], ["Cotton Polo", "Navy Chinos", "Canvas Sneakers", "Baseball Cap", "Wristwatch"], ["Grey T-Shirt", "Linen Pants", "Leather Sandals", "Sunglasses(Day Only)", "Cotton Scarf"], ["Button Down T-shirt", "Chino Shorts", "Slipon Shoes", "Sunglasses(Day Only)", "Mesh Cap"], ["Cotton shirt", "Chino Pants", "Boat Shoes", "Hat", "Bracelet"]];
const MalehighTempNoRainLowHumidity = [["Linen Shirt", "Cotton Shorts", "Flip-Flops", "Straw Hat", "Sunglasses(Day Only)"], ["V-Neck T-Shirt", "Blue Chinos", "Canvas Sneakers", "Cap", "Wristwatch"], ["Cotton Polo", "Linen Pants", "Loafers", "Sunglasses(Day Only)", "Leather Bracelet"], ["Short Sleeve TShirt", "Linen Shorts", "Slipon Sandals", "Hat", "Cotton Scarf"], ["Wicking Shirt", "Chino Shorts", "Boat Shoes", "Cap", "Sunglasses(Day Only)"]];
const MalehighTempRainHighHumidity = [["T-Shirt", "Quick-Dry Shorts", "Waterproof Sneakers", "Rain Jacket", "Hat"], ["Athletic Shirt", "Nylon Pants", "Water Resistant Sandals", "Rain Poncho", "WaterProof Watch"], ["Polo Shirt", "WaterProof Chinos", "WaterProof Boots", "RainProof Cap", "Compact Umbrella"], ["Long Sleeve Shirt", "Cargo Shorts", "WaterProof Shoes", "Raincoat", "Sunglasses(Day Only)"], ["Button Down Shirt", "WaterProof Joggers", "WaterProof Hiking Shoes", "Rain Jacket", "Cap"]];
const MalehighTempRainMeduimHumidity = [["T-Shirt", "Quick-Dry Shorts", "Waterproof Sneakers", "Rain Jacket", "Hat"], ["Athletic Shirt", "Nylon Pants", "Water Resistant Sandals", "Rain Poncho", "WaterProof Watch"], ["Polo Shirt", "WaterProof Chinos", "WaterProof Boots", "RainProof Cap", "Compact Umbrella"], ["Long Sleeve Shirt", "Cargo Shorts", "WaterProof Shoes", "Raincoat", "Sunglasses(Day Only)"], ["Button Down Shirt", "WaterProof Joggers", "WaterProof Hiking Shoes", "Rain Jacket", "Cap"]];
const MalehighTempRainLowHumidity = [["T-Shirt", "Quick-Dry Shorts", "Waterproof Sneakers", "Rain Jacket", "Hat"], ["Athletic Shirt", "Nylon Pants", "Water Resistant Sandals", "Rain Poncho", "WaterProof Watch"], ["Polo Shirt", "WaterProof Chinos", "WaterProof Boots", "RainProof Cap", "Compact Umbrella"], ["Long Sleeve Shirt", "Cargo Shorts", "WaterProof Shoes", "Raincoat", "Sunglasses(Day Only)"], ["Button Down Shirt", "WaterProof Joggers", "WaterProof Hiking Shoes", "Rain Jacket", "Cap"]];
const MalemediumTempNoRainHighHumidity = [["Linen Shirt", "Chino Shorts", "Canvas Sneakers", "Cap", "Sunglasses(Day Only)"], ["Cotton T-Shirt", "Linen Trousers", "Leather Sandals", "Wide Hat", "Wristwatch"], ["Polo T-Shirt", "Cotton Shorts", "Loafers", "Sunglasses(Day Only)", "Nylon Jacket"], ["Button Down T-Shirt", "Chino Shorts", "Sneakers", "Baseball Cap", "Bracelet"], ["Cotton T-Shirt", "Linen Pants", "Flip Flops", "Straw Hat", "Cotton Scarf"]];
const MalemediumtempNoRainMediumHumidity = [["Linen Shirt", "Cotton Shorts", "Loafers", "Sunglasses(Day Only)", "Straw Hat"], ["Cotton Polo", "Navy Chinos", "Canvas Sneakers", "Baseball Cap", "Wristwatch"], ["Grey T-Shirt", "Linen Pants", "Leather Sandals", "Sunglasses(Day Only)", "Cotton Scarf"], ["Button Down T-shirt", "Chino Shorts", "Slipon Shoes", "Sunglasses(Day Only)", "Mesh Cap"], ["Cotton shirt", "Chino Pants", "Boat Shoes", "Hat", "Bracelet"]];
const MalemediumTempNoRainLowHumidity = [["Linen Shirt", "Cotton Shorts", "Flip-Flops", "Straw Hat", "Sunglasses(Day Only)"], ["V-Neck T-Shirt", "Blue Chinos", "Canvas Sneakers", "Cap", "Wristwatch"], ["Cotton Polo", "Linen Pants", "Loafers", "Sunglasses(Day Only)", "Leather Bracelet"], ["Short Sleeve TShirt", "Linen Shorts", "Slipon Sandals", "Hat", "Cotton Scarf"], ["Wicking Shirt", "Chino Shorts", "Boat Shoes", "Cap", "Sunglasses(Day Only)"]];
const MalemediumTempRainHighHumidity = [["T-Shirt", "Quick-Dry Shorts", "Waterproof Sneakers", "Rain Jacket", "Hat"], ["Athletic Shirt", "Nylon Pants", "Water Resistant Sandals", "Rain Poncho", "WaterProof Watch"], ["Polo Shirt", "WaterProof Chinos", "WaterProof Boots", "RainProof Cap", "Compact Umbrella"], ["Long Sleeve Shirt", "Cargo Shorts", "WaterProof Shoes", "Raincoat", "Sunglasses(Day Only)"], ["Button Down Shirt", "WaterProof Joggers", "WaterProof Hiking Shoes", "Rain Jacket", "Cap"]];
const MalemediumTempRainMeduimHumidity = [["T-Shirt", "Quick-Dry Shorts", "Waterproof Sneakers", "Rain Jacket", "Hat"], ["Athletic Shirt", "Nylon Pants", "Water Resistant Sandals", "Rain Poncho", "WaterProof Watch"], ["Polo Shirt", "WaterProof Chinos", "WaterProof Boots", "RainProof Cap", "Compact Umbrella"], ["Long Sleeve Shirt", "Cargo Shorts", "WaterProof Shoes", "Raincoat", "Sunglasses(Day Only)"], ["Button Down Shirt", "WaterProof Joggers", "WaterProof Hiking Shoes", "Rain Jacket", "Cap"]];
const MalemediumTempRainLowHumidity = [["T-Shirt", "Quick-Dry Shorts", "Waterproof Sneakers", "Rain Jacket", "Hat"], ["Athletic Shirt", "Nylon Pants", "Water Resistant Sandals", "Rain Poncho", "WaterProof Watch"], ["Polo Shirt", "WaterProof Chinos", "WaterProof Boots", "RainProof Cap", "Compact Umbrella"], ["Long Sleeve Shirt", "Cargo Shorts", "WaterProof Shoes", "Raincoat", "Sunglasses(Day Only)"], ["Button Down Shirt", "WaterProof Joggers", "WaterProof Hiking Shoes", "Rain Jacket", "Cap"]];
const MalelowTempNoRain = [["Wool Sweater", "Slim Fit Jeans", "Boots", "Puffer Jacket", "Scarf"], ["Flannel Shirt", "Chino Pants", "Desert Boots", "Denim Jacket", "Beanie"], ["SweatShirt", "Cargo Pants", "Sneakers", "Windbreaker", "WristWatch"], ["Thermal Base Layer", "Thermal Pants", "Insulated Boots", "Puffer Vest", "Beanie"], ["Kashmir Sweater", "Twill Trousers", "Loafers", "Trench Coat", "Gloves"]];
const MalelowTempRain = [["Rain Jacket", "Thermal Shirt", "Cargo Pants", "Boots", "Beanie"], ["Parka", "Hooded SweatShirt", "Dry Trousers", "Shoes", "Umbrella"], ["Jacket", "Flannel Shirt", "Insulated Pants", "Sneakers", "Cap"]];
const MaleminusTempNoRain = [["Down Jacket", "Thermal Base Layer Top", "Woolen Pant", "Winter Boots", "Woolen Beanie"], ["HeavyWeight Sweater", "Corduroy Pants", "Puffer Vest", "Boots", "Scarf"], ["Wool OverCoat", "Sweater", "Trousers", "Ankle Level Boots", "Kashmir Scarf"]];
const MaleminusTempRain = [["Insulated Jacket", "Thermal Shirt", "Snow Pants", "Winter Boots", "Fleece Beanie"], ["SnowProof Parka", "Fleece Pullover", "Thermal Pants", "Gainters", "Snow Boots"], ["WindProof SnowCoat", "Thick Knit Pant", "Snow Shoes", "SnowProof Hat", "Scarf"]];




const FemalehighTempNoRainHighHumidity = [
    ["Maxi Dress", "Wedge Sandals", "Sun Hat", "Sunglasses(Day Only)", "Bag"],
    ["Shoulder Top", "Linen Shorts", "Espadrilles", "Tote Bag", "Scarf"],
    ["Tank Top", "Flowy Culottes", "Sneakers", "Hat", "Pack"],
    ["Cotton SunDress", "Flowy Culottes", "Sneakers", "Tote Bag", "Chic Glasses"],
    ["Button Down Shirt", "Midi Skirt", "Ballet Flats", "Visor Hat", "BackPack"]
  ];
  
  const FemalehighTempNoRainMediumHumidity = [
    ["Chambray Shirt", "Denim Skirt", "Ankle Boots", "Straw Hat", "Mini Backpack"],
    ["Linen Blouse", "Cotton Trousers", "Sandals", "Kimono", "Tote Bag"],
    ["Athletic Top", "Culottes", "Slip-on Sneakers", "Cap", "Bag"],
    ["Wrap Dress", "Sandals", "Cardigan", "Sunglasses(Day Only)", "Clutch Bag"],
    ["T-Shirt", "Midi Skirt", "Canvas Shoes", "Utility Jacket", "Bag"]
  ];
  
  const FemalehighTempNoRainLowHumidity = [
    ["Cotton Kurta", "Denim Pant", "Shoes", "Hat", "Bag"],
    ["Maxi Dress", "Chiffon Dupatta", "Chappals", "Necklace", "Sunglasses(Day Only)"],
    ["Wrap Top", "Plazzo Pants", "Sneakers", "Shrug", "BackPack"],
    ["Tank Top", "Anarkali Skirt", "Espadrilles", "Light Kimono", "Earrings"],
    ["Button Down Shirt", "Salwar Pants", "Sandals", "HandBag", "Scarf"]
  ];
  
  const FemalehighTempRainHighHumidity = [
    ["Anorak Jacket", "Cotton Tunic", "Leggings", "Shoes", "Umbrella"],
    ["Maxi Dress", "WaterProof Jacket", "Rain Boots", "Bag", "Sunglasses(Day Only)"],
    ["Moisture-Wicking Blouse", "Wide Leg Trousers", "Sandals", "Rain Poncho", "Bracelet"],
    ["Cotton Kurti", "Joggers", "Sneakers", "Raincoat", "Scarf"],
    ["Hoodie", "Print Leggings", "Flats", "WindBreaker", "Bucket Hat"]
  ];
  
  const FemalehighTempRainMediumHumidity = [
    ["Anorak Jacket", "Cotton Tunic", "Leggings", "Shoes", "Umbrella"],
    ["Maxi Dress", "WaterProof Jacket", "Rain Boots", "Bag", "Sunglasses(Day Only)"],
    ["Moisture-Wicking Blouse", "Wide Leg Trousers", "Sandals", "Rain Poncho", "Bracelet"],
    ["Cotton Kurti", "Joggers", "Sneakers", "Raincoat", "Scarf"],
    ["Hoodie", "Print Leggings", "Flats", "WindBreaker", "Bucket Hat"]
  ];
  
  const FemalehighTempRainLowHumidity = [
    ["Anorak Jacket", "Cotton Tunic", "Leggings", "Shoes", "Umbrella"],
    ["Maxi Dress", "WaterProof Jacket", "Rain Boots", "Bag", "Sunglasses(Day Only)"],
    ["Moisture-Wicking Blouse", "Wide Leg Trousers", "Sandals", "Rain Poncho", "Bracelet"],
    ["Cotton Kurti", "Joggers", "Sneakers", "Raincoat", "Scarf"],
    ["Hoodie", "Print Leggings", "Flats", "WindBreaker", "Bucket Hat"]
  ];
  
  const FemalemediumTempNoRainHighHumidity = [
    ["Maxi Dress", "Wedge Sandals", "Sun Hat", "Sunglasses(Day Only)", "Bag"],
    ["Shoulder Top", "Linen Shorts", "Espadrilles", "Tote Bag", "Scarf"],
    ["Tank Top", "Flowy Culottes", "Sneakers", "Hat", "Pack"],
    ["Cotton SunDress", "Flowy Culottes", "Sneakers", "Tote Bag", "Chic Glasses"],
    ["Button Down Shirt", "Midi Skirt", "Ballet Flats", "Visor Hat", "BackPack"]
  ];
  
  const FemalemediumTempNoRainMediumHumidity = [
    ["Chambray Shirt", "Denim Skirt", "Ankle Boots", "Straw Hat", "Mini Backpack"],
    ["Linen Blouse", "Cotton Trousers", "Sandals", "Kimono", "Tote Bag"],
    ["Athletic Top", "Culottes", "Slip-on Sneakers", "Cap", "Bag"],
    ["Wrap Dress", "Sandals", "Cardigan", "Sunglasses(Day Only)", "Clutch Bag"],
    ["T-Shirt", "Midi Skirt", "Canvas Shoes", "Utility Jacket", "Bag"]
  ];
  
  const FemalemediumTempNoRainLowHumidity = [
    ["Cotton Kurta", "Denim Pant", "Shoes", "Hat", "Bag"],
    ["Maxi Dress", "Chiffon Dupatta", "Chappals", "Necklace", "Sunglasses(Day Only)"],
    ["Wrap Top", "Plazzo Pants", "Sneakers", "Shrug", "BackPack"],
    ["Tank Top", "Anarkali Skirt", "Espadrilles", "Light Kimono", "Earrings"],
    ["Button Down Shirt", "Salwar Pants", "Sandals", "HandBag", "Scarf"]
  ];
  
  const FemalemediumTempRainHighHumidity = [
    ["Anorak Jacket", "Cotton Tunic", "Leggings", "Shoes", "Umbrella"],
    ["Maxi Dress", "WaterProof Jacket", "Rain Boots", "Bag", "Sunglasses(Day Only)"],
    ["Moisture-Wicking Blouse", "Wide Leg Trousers", "Sandals", "Rain Poncho", "Bracelet"],
    ["Cotton Kurti", "Joggers", "Sneakers", "Raincoat", "Scarf"],
    ["Hoodie", "Print Leggings", "Flats", "WindBreaker", "Bucket Hat"]
  ];
  
  const FemalemediumTempRainMediumHumidity = [
    ["Anorak Jacket", "Cotton Tunic", "Leggings", "Shoes", "Umbrella"],
    ["Maxi Dress", "WaterProof Jacket", "Rain Boots", "Bag", "Sunglasses(Day Only)"],
    ["Moisture-Wicking Blouse", "Wide Leg Trousers", "Sandals", "Rain Poncho", "Bracelet"],
    ["Cotton Kurti", "Joggers", "Sneakers", "Raincoat", "Scarf"],
    ["Hoodie", "Print Leggings", "Flats", "WindBreaker", "Bucket Hat"]
  ];
  
  const FemalemediumTempRainLowHumidity = [
    ["Anorak Jacket", "Cotton Tunic", "Leggings", "Shoes", "Umbrella"],
    ["Maxi Dress", "WaterProof Jacket", "Rain Boots", "Bag", "Sunglasses(Day Only)"],
    ["Moisture-Wicking Blouse", "Wide Leg Trousers", "Sandals", "Rain Poncho", "Bracelet"],
    ["Cotton Kurti", "Joggers", "Sneakers", "Raincoat", "Scarf"],
    ["Hoodie", "Print Leggings", "Flats", "WindBreaker", "Bucket Hat"]
  ];
  
  const FemalelowTempNoRain = [
    ["Sweater", "Midi Skirt", "Stiletto Boots", "Fur Coat", "Necklace"],
    ["BodyCon Dress", "Leather Boots", "Blazer", "Belted Waist", "Bold Lipstick"],
    ["Lace Crop Top", "Leather Pants", "Heels", "Duster Jacket", "Clutch Bag"],
    ["Long Sleeve BodySuit", "Skinny Jeans", "Ankle Boots", "Moto Jacket", "Necklace"]
  ];
  
  const FemalelowTempRain = [
    ["Trench Coat", "Long Sleeve Top", "Skinny Jeans", "Rain Boots", "Bag"],
    ["Anorak Jacket", "Lace BodySuit", "Leather Leggings", "Ankle Boots", "Earrings"],
    ["Rain Jacket", "BodyCon Sweater", "Rain Boots", "Necklace", "Hat"]
  ];
  
  const FemaleminusTempNoRain = [
    ["Thermal Turtleneck", "Long Skirt", "Heeled Boots", "Fur Coat", "Earrings"],
    ["Sweater", "Shawl", "Leather Boots", "Leather Jacket", "Bracelets"],
    ["BodyCon Top", "Trousers", "Ankle Booties", "Puffer Vest", "Scarf"]
  ];
  
  const FemaleminusTempRain = [
    ["SnowProof Coat", "Sleeve Top", "Leather Leggings", "Knee High Boots", "Beanie"],
    ["Thermal TurtleNeck", "Snow Jacket", "Snow Boots", "Printed Scarf", "Bag"],
    ["Wrap Dress", "SnowProof Anorak", "SnowProof Booties", "Umbrella", "Hat"]
  ];

