json.pokemon do 
    json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :image_url
    json.extract! @moves, :id, :name
    json.extract! @items, :id, :pokemon_id, :name, :price, :happiness, :image_url
end
