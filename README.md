
# PROFFY
## Usuarios
```
    user: {
        name: string,
        avatar: string
        whatsapp: string,
        bio: string
    }
```
## Conexões
```
    connections: { 
        user_id: number;
    }

    METHOD: GET
    HEADERS: None
    ENDPOINT: '/connections'
    REQUEST: None
    RESPONSE: { connections[] }

    METHOD: POST
    HEADERS: None
    ENDPOINT: '/connections'
    REQUEST: { connection }
    RESPONSE: None
```

## Aulas
```
    METHOD: GET
    HEADERS: None
    ENDPOINT: '/classes'
    REQUEST: None
    RESPONSE: { 
        [ 
            {
                id: number,
                subject: string,
                cost: number,
                user_id: number,
                name: string,
                avatar: string,
                whatsapp: string,
                bio: string
            },
        ]
    }
```
As Aulas podem ser filtradas, todos os parâmetros são necessarios:
```
    QUERY PARAMS:
        ?materia=<materia>
        ?week_day=<week_day>
        ?time=<time>
```
```
    METHOD: POST
    HEADERS: None
    ENDPOINT: '/classes'
    REQUEST: { 
        name: string,
        avatar: string,
        whatsapp: string,
        bio: string,
        subject: string,
        cost: number,
        schedule: [
            { 
                week_day: number,
                from: string,
                to: string
            },
        ]
     }
    RESPONSE: None
```
