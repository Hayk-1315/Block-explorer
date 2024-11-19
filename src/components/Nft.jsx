import { useState, useRef} from 'react';

function Nft({alchemy}) {
    const contractAddressRef = useRef();
    const tokenIdRef = useRef();
    const [nftMetadata, setNftMetadata] = useState([]);
    const [floorPrice, setFloorPrice] = useState([]);

    const handleGetNftMetadata = async () => {
        const contractAddress = contractAddressRef.current.value;
        const tokenId = tokenIdRef.current.value;
        setNftMetadata(await alchemy.nft.getNftMetadata(contractAddress, tokenId));
        setFloorPrice(await alchemy.nft.getFloorPrice(contractAddress));
    }

    return (
        <div>
            <p className='klor'>NFT Metadata</p>
            <input type="text" ref={contractAddressRef} placeholder="Enter contract address" />
            <input type="text" ref={tokenIdRef} placeholder="Enter token id" />
            <button className="klorik" onClick={handleGetNftMetadata}>Get NFT Metadata</button>

            <div>
                {nftMetadata.metadataError !== undefined && (
                    <p>An Error occurred</p>
                )}
                {nftMetadata.length === 0 ? (
                    <p>Loading Metadata...</p>
                ) : (<>
                    <ul className="unstyle">
                        <li key={'name'}>Name: {nftMetadata.contract.name}</li>
                        <li  key={'symbol'}>Symbol: {nftMetadata.contract.symbol}</li>
                        { nftMetadata.title && <li  key={'title'}>Title: {nftMetadata.title}</li> }
                        { nftMetadata.description && <li  key={'desc'}>Description: {nftMetadata.description}</li> }
                        { nftMetadata.tokenType && <li  key={'type'}>Token type: {nftMetadata.tokenType}</li> }
                        { nftMetadata.contract.totalSupply && <li  key={'supply'}>Supply: {nftMetadata.contract.totalSupply}</li> }
                        { nftMetadata.contract.contractDeployer && <li  key={'deployer'}>Deployer: {nftMetadata.contract.contractDeployer}</li> }
                        { nftMetadata.contract.address && <li  key={'address'}>Address: {nftMetadata.contract.address}</li> }
                        { nftMetadata.contract.deployedBlockNumber && <li  key={'block'}>Block number: {nftMetadata.contract.deployedBlockNumber}</li> }
                       
                    </ul>
                   
                    </>
                )}
            </div>
        </div>
    );
}

export default Nft;
// <p> Open Sea floor price: {floorPrice.openSea.floorPrice} </p>

