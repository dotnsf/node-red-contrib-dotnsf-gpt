var axios = require( 'axios' );

module.exports = function( RED ){
  function main( config ){
    RED.nodes.createNode( this, config );
    var node = this;
    node.on( 'input', function( msg ){
      node.status( { fill: "green", shape: "dot", text: "..." } );

      var IGNORE_PHRASE = 10;  //. 結果の最初のフレーズがこの長さ以下だったら無視する

      var headers = { 'Content-Type': 'application/json' };
      var verb = config.verb;                         // 'completions'
      var prompt = config.prompt;
      var model = config.model;                       // 'text-davinci-003'
      var max_tokens = ( typeof config.max_tokens == 'text' ? parseInt( config.max_tokens ) : config.max_tokens ); // 4000
      var apikey = config.apikey;

      var payload = msg.payload;
      if( typeof payload == 'string' ){
        prompt = payload;
      }else if( typeof payload == 'object' ){
        if( payload.prompt ){ prompt = payload.prompt; }
        if( payload.model ){ model = payload.model; }
        if( payload.max_tokens ){ model = payload.max_tokens; }
        if( payload.apykey ){ apykey = payload.apykey; }

        if( payload.ignore_phrase ){ IGNORE_PHRASE = ( typeof payload.ignore_phrase == 'text' ? parseInt( payload.ignore_phrase ) : payload.ignore_phrase ); }
      }

      var option = {
        prompt: prompt,
        model: model,
        max_tokens: max_tokens
      };
      headers['Authorization'] = 'Bearer ' + apikey;

      //console.log( {apikey} );
      if( apikey ){
        if( text ){
          axios.post( 'https://api.openai.com/v1/' + verb, option, headers ).then( function( result ){
            if( result.data && result.data.choices && result.data.choices.length > 0 ){
              var answer = result.data.choices[0].text;

              //. 最初の "\n\n" 以降が正しい回答？
              var tmp = answer.split( "\n\n" );
              if( tmp.length > 1 && tmp[0].length < IGNORE_PHRASE ){
                tmp.shift();
                answer = tmp.join( "\n\n" );
              }
              msg.payload = answer;
              node.status( {} );
              node.send( msg );
            }else{
              msg.payload = JSON.stringify( result );
              node.status( {} );
              node.send( msg );
            }
          });
        }else{
          msg.payload = 'Query text is missing.';
          node.status( {} );
          node.send( msg );
        }
      }else{
        msg.payload = 'API Key is missing.';
        node.status( {} );
        node.send( msg );
      }
    });
  };

  RED.nodes.registerType( 'GPT', main );
}
