import json

def main():
    
    with open("edicoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    interpretes = {}
    paises = {}
    
    for edicao in data:
        
        print(edicao)
        
        id_edicao = edicao['_id']
        organizacao = edicao['organizacao']
        
        vencedor = None
        
        if 'vencedor' in edicao:
            vencedor = edicao['vencedor']
            
        ano = edicao['anoEdicao']
        
        for musica in edicao['musicas']:
            
            id_musica = musica['_id']
            nome = musica['titulo']
            pais = musica['pais']
            interprete = musica['interprete']
            
            interpretes[interprete] = {
                "_id" : interprete,
                "pais" : pais
            }
            
            if pais not in paises:
                
                paises[pais] = {
                    "_id" : pais,
                    "organizou" : [],
                    "participou" : []
                }
                
            ed_p = {
                "_id" : id_edicao,
                "ano" : ano,
                "nome_musica" : nome,
                "id-musica" : id_musica,
                "interprete" : interprete,
                "venceu" : vencedor is not None and vencedor == pais
            }   
            
            paises[pais]['participou'].append(ed_p)
            
        ed_o = {
                "_id" : id_edicao,
                "ano" : ano,
            }
        
        if organizacao not in paises:
                
            paises[organizacao] = {
                "_id" : organizacao,
                "organizou" : [],
                "participou" : []
            }
                
        paises[organizacao]['organizou'].append(ed_o)
        
    i_final = []
    p_final = []
    
    for key,interprete in interpretes.items():
        
        i_final.append(interprete)
        
    for key,pais in paises.items():
        
        p_final.append(pais)
    
        
    
    with open("paises.json", 'w', encoding='utf-8', newline='\n') as f:
        json.dump(p_final, f, indent=4, ensure_ascii=False)
        
    with open("interpretes.json", 'w', encoding='utf-8', newline='\n') as f:
        json.dump(i_final, f, indent=4, ensure_ascii=False)
 

main()